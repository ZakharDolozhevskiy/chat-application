import React from 'react';
import Paper from '@material-ui/core/Paper';
import throttle from 'lodash.throttle';
import {connect} from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/es/Button/Button";
import Message from '../components/message/index';
import TextField from "@material-ui/core/es/TextField/TextField";
import TranslatorContext from '../translator/translator-context';
import { sendMessage } from '../actions/messages';
import { isCtrlKey, isEnterKey } from '../modules/helpers';

export class Chat extends React.Component {
  constructor() {
    super();

    this.input = React.createRef();
    this.msgList = React.createRef();

    this.state = { message: '', anchorEl: null };
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
    this.setState({ message: this.state.message + ` :${name}:` });

  trackHotKeys = throttle((ev) => {
    if (this.props.hotKeys && isEnterKey(ev) && isCtrlKey(ev)) {
      this.sendMessage();
    }
  }, 100);

  sendMessage = () => {
    if (this.state.message) {
      this.props.sendMessage({
        message: this.state.message,
        username: this.props.username
      });

      this.setState({
        message: '',
        anchorEl: null
      });
    }
  };

  updateScrollPosition = () => {
    this.msgList.current.scrollTop =
      this.msgList.current.scrollHeight;
  };

  componentDidUpdate(prev) {
    if (prev.messages.length !== this.props.messages.length) {
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
    return (
      <TranslatorContext.Consumer>
        {translator => (
          <div className={this.props.className}>
            <div className="messages" ref={this.msgList}>
              {this.props.messages.map((m, i) => <Message key={i} timeFormat={this.props.timeFormat} {...m}/>)}
            </div>
            <div className="controls">
              <TextField
                autoFocus
                className="text-input"
                inputRef={this.input}
                value={this.state.message}
                onChange={this.onInputChange}
                placeholder={translator.translate('Start typing...')}
              />
              <IconButton onClick={this.showPopover}>
                <Icon>insert_emoticon</Icon>
              </IconButton>
              <IconButton onClick={this.sendMessage}>
                <Icon>send</Icon>
              </IconButton>
              <Popover
                open={!!this.state.anchorEl}
                anchorEl={this.state.anchorEl}
                onClose={this.closePopover}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <EmojiPicker onEmojiClick={this.onEmojiSelect}/>
              </Popover>
            </div>
          </div>
        )}
      </TranslatorContext.Consumer>
    )
  }
}

const stateToProps = (store) => ({
  messages: store.messages.data,
  hotKeys: store.settings.hotKeys,
  username: store.settings.username,
  timeFormat: store.settings.timeFormat
});

const styledChat = styled(Chat)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  
  .messages {
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
  
  .controls {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    
    button {
      z-index: 2000;
    }
  }
  
  .text-input {
    width: 100%;
    margin-right: 0.02816901%;
  }
`;

export default connect(stateToProps, { sendMessage })(styledChat);
