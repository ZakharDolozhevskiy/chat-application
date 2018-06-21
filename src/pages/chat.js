import React from 'react';
import Paper from '@material-ui/core/Paper';
import throttle from 'lodash.throttle';
import {connect} from 'react-redux';

import Icon from "@material-ui/core/es/Icon/Icon";
import Button from "@material-ui/core/es/Button/Button";
import Message from '../components/message';
import TextField from "@material-ui/core/es/TextField/TextField";

import {sendMessage} from '../actions/messages';

export class Chat extends React.Component {
  state = { message: '' };

  onInputChange = (event) =>
    this.setState({ message: event.target.value });

  trackHotKeys = throttle((event) => {
    if (this.props.hotKeys && this.isSendMsgComb(event)) {
      this.sendMessage();
    }
  }, 100);

  isSendMsgComb = event =>
    (event.ctrlKey || event.metaKey) &&
    (event.keyCode === 13 || event.keyCode === 10);

  sendMessage = () => {
    if (!this.state.message) {
      return;
    }

    this.props.sendMessage({
      message: this.state.message,
      username: this.props.username
    });

    this.setState({ message: '' });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.trackHotKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.trackHotKeys);
  }

  render() {
    return (
      <div>
        <Paper elevation={4}>
          <div>
            {this.props.messages.map(
              (m, i) => <Message key={i} message={m.message} imageLinks={m.imageLinks} videoLinks={m.videoLinks}/>
            )}
          </div>
          <TextField
            id="name"
            label="Name"
            autoFocus
            value={this.state.message}
            onChange={this.onInputChange}
            margin="normal"
          />
          <Button variant="fab" color="secondary" aria-label="edit" onClick={this.sendMessage}>
            <Icon>edit_icon</Icon>
          </Button>
        </Paper>
      </div>
    )
  }
}

const stateToProps = (store) => ({
  messages: store.messages.data,
  hotKeys: store.settings.hotKeys,
  username: store.settings.username,
  timeFormat: store.settings.timeFormat
});

export default connect(stateToProps, {sendMessage})(Chat);
