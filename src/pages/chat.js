import React from "react";
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

import { sendMessage } from '../actions/messages';
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Icon from "@material-ui/core/es/Icon/Icon";

export class Chat extends React.Component {
	state = { message: '' };

	onInputChange = (event) =>
		this.setState({ message: event.target.value });

	onSendBtnClick = () =>
		this.props.sendMessage({
			message: this.state.message,
			username: this.props.username
		});

	render() {
		return (
			<div>
				<Paper elevation={4}>
						<div>
							{this.props.messages.map(
								(m, i) => <span key={i}>{JSON.stringify(m)}</span>
							)}
						</div>
					<TextField
						id="name"
						label="Name"
						value={this.state.message}
						onChange={this.onInputChange}
						margin="normal"
					/>
					<Button variant="fab" color="secondary" aria-label="edit" onClick={this.onSendBtnClick}>
						<Icon>edit_icon</Icon>
					</Button>
				</Paper>
			</div>
		)
	}
}

const stateToProps = (store) => ({
	messages: store.messages,
	username: store.settings.username,
	timeFormat: store.settings.timeFormat
});

export default connect(stateToProps, { sendMessage })(Chat);
