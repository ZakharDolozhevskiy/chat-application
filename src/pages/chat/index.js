import React from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import TextField from "@material-ui/core/TextField/TextField";
import IconButton from '@material-ui/core/IconButton';
import EmojiPicker from 'emoji-picker-react';

import Message from '../../components/message/index';
import { routes } from '../../config';
import { sendMessage } from '../../actions/messages';
import TranslatorContext from '../../translator/translator-context';
import { isCtrlKey, isEnterKey } from '../../modules/helpers';

import styles from './styles';

export class Chat extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
    this.msgList = React.createRef();
    this.state = { message: '', anchorEl: null };
    // Popover configurations
    this.anchorOrigin = { vertical: 'top', horizontal: 'left' };
    this.transformOrigin = { vertical: 'bottom', horizontal: 'right' };
  }

  showPopover = (ev) =>
    this.setState({ anchorEl: ev.currentTarget });

  closePopover = () =>
    this.setState({ anchorEl: null });

  onInputChange = (ev) =>
    this.setState({ message: ev.target.value });

  onEnterKeyPress = (ev) =>
    isEnterKey(ev) && this.sendMessage();

  onEmojiSelect = (code, { name }) =>
    this.setState({
      message: this.state.message
        ? `${this.state.message} :${name}:`
        : `:${name}:`
    });

  trackHotKeys = throttle((ev) => {
    if (this.props.hotKeys && isEnterKey(ev) && isCtrlKey(ev)) {
      this.sendMessage();
    }
  }, 400);

  sendMessage = () => {
    if (this.state.message && this.props.path === routes.MAIN) {
      this.props.sendMessage({
        message: this.state.message,
        username: this.props.username
      });

      this.setState({ message: '', anchorEl: null });
    }
  };

  updateScrollPosition = () => {
    // Prevent scroll position change if the chat view is inactive
    if (this.props.path === routes.MAIN) {
      this.msgList.current.scrollTop =
        this.msgList.current.scrollHeight;
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.updateScrollPosition();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.trackHotKeys);
    this.input.current.addEventListener('keydown', this.onEnterKeyPress);

    this.updateScrollPosition();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.trackHotKeys);
    this.input.current.removeEventListener('keydown', this.onEnterKeyPress);
  }

  render() {
    const { messages, timeFormat, className } = this.props;

    return (
      <TranslatorContext.Consumer>
        {translate => (
          <section className={className}>
            <div className="messages" ref={this.msgList}>
              {messages.map((msg, idx) =>
                <Message key={idx} timeFormat={timeFormat} {...msg} />)}
            </div>
            <div className="controls">
              <TextField
                autoFocus
                value={this.state.message}
                inputRef={this.input}
                onChange={this.onInputChange}
                className="text-input"
                placeholder={translate('Your message')}
              />
              <Tooltip title={translate('Emoji')}>
                <IconButton onClick={this.showPopover}>
                  <Icon>insert_emoticon</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title={translate('Send')}>
                <IconButton onClick={this.sendMessage}>
                  <Icon>create</Icon>
                </IconButton>
              </Tooltip>
              <Popover
                open={!!this.state.anchorEl}
                anchorEl={this.state.anchorEl}
                onClose={this.closePopover}
                anchorOrigin={this.anchorOrigin}
                transformOrigin={this.transformOrigin}
              >
                <EmojiPicker
                  className="emoji-picker"
                  onEmojiClick={this.onEmojiSelect}
                />
              </Popover>
            </div>
          </section>
        )}
      </TranslatorContext.Consumer>
    )
  }
}

const stateToProps = (store) => ({
  messages: store.messages.data,
  hotKeys: store.settings.hotKeys,
  username: store.settings.username,
  path: store.router.location.pathname,
  timeFormat: store.settings.timeFormat,
});

Chat.propTypes = {
  path: PropTypes.string,
  messages: PropTypes.array,
  hotKeys: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired
};

const styledChat = styled(Chat)`${styles}`;

export default connect(stateToProps, { sendMessage })(styledChat);
