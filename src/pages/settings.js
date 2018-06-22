import React from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Radio from "@material-ui/core/es/Radio/Radio";
import Button from "@material-ui/core/es/Button/Button";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import TextField from "@material-ui/core/es/TextField/TextField";
import Typography from '@material-ui/core/Typography';
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";

import { timeFormats } from '../config';
import * as Actions from '../actions/settings';

export class Settings extends React.Component {
  constructor(props) {
    super();
    this.state = { username: props.settings.username };
  }

  onUserNameChange = (event) => {
    this.setState({ username: event.target.value });
    this.saveUserNameChanges();
  };

  saveUserNameChanges = debounce(() =>
      this.props.changeUserName(this.state.username),
    200);

  onLanguageChange = (event) => {
    this.props.changeLanguage(event.target.value);
  };

  render() {
    const { settings } = this.props;

    return (
      <Paper elevation={4}>
        <TextField
          label="User name"
          placeholder="Add user name"
          value={this.state.username}
          onChange={this.onUserNameChange}
        />

        <Typography component="p">Interface colors</Typography>
        <RadioGroup
          value={settings.theme}
          onChange={this.props.changeTheme}>
          <FormControlLabel value="light" label="Light" control={<Radio/>}/>
          <FormControlLabel value="dark" label="Dark" control={<Radio/>}/>
        </RadioGroup>

        <Typography component="p">Clock displays</Typography>
        <RadioGroup
          value={settings.timeFormat}
          onChange={this.props.changeTimeFormat}>
          <FormControlLabel value={timeFormats[12]} label="12 Hours" control={<Radio/>}/>
          <FormControlLabel value={timeFormats[24]} label="24 Hours" control={<Radio/>}/>
        </RadioGroup>
        <Typography component="p">Send message on CTRL+ENTER</Typography>
        <RadioGroup
          value={`${settings.hotKeys}`}
          onChange={this.props.toggleHotKeys}>
          <FormControlLabel value="true" label="On" control={<Radio/>}/>
          <FormControlLabel value="false" label="Off" control={<Radio/>}/>
        </RadioGroup>
        <FormControl>
          <InputLabel htmlFor="lang">Language</InputLabel>
          <Select
            value={settings.language}
            inputProps={{ id: 'lang' }}
            onChange={this.onLanguageChange}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Russian</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={this.props.resetSettings}>
          Reset
        </Button>
      </Paper>
    )
  }
}

const mapDispatchToProps = {
  changeTheme: Actions.changeTheme,
  toggleHotKeys: Actions.toggleHotKeys,
  changeUserName: Actions.changeUserName,
  changeLanguage: Actions.changeLanguage,
  changeTimeFormat: Actions.changeTimeFormat,
  resetSettings: Actions.resetSettings
};

export default connect(
  ({ settings }, ownProps) => ({ settings }),
  mapDispatchToProps)
(Settings);
