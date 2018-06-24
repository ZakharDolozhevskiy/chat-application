import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from "@material-ui/core/es/Button/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import ThemesSelection from '../../components/selections/themes-selection';
import FormatSelection from '../../components/selections/format-selection';
import LanguageSelection from '../../components/selections/language-selection';
import TranslatorContext from '../../translator/translator-context';
import ShortcutsSelection from '../../components/selections/shortcuts-selection';

import * as Actions from '../../actions/settings';
import styles from './styles';

export class Settings extends React.Component {
  onUserNameChange = (event) => {
    this.props.changeUserName(event.target.value);
  };

  render() {
    const { settings, className } = this.props;

    return (
      <TranslatorContext.Consumer>
        {translate => (
          <section className={className}>
            <TextField
              fullWidth
              value={settings.username}
              className="username-field"
              label={translate('Username')}
              placeholder={translate('Add username')}
              onChange={this.onUserNameChange}
            />
            <ThemesSelection
              translate={translate}
              current={settings.theme}
              language={settings.language}
              onChange={this.props.changeTheme}
            />
            <FormatSelection
              translate={translate}
              timeFormat={settings.timeFormat}
              language={settings.language}
              onChange={this.props.changeTimeFormat}
            />
            <ShortcutsSelection
              translate={translate}
              hotKeys={settings.hotKeys}
              language={settings.language}
              onChange={this.props.toggleHotKeys}
            />
            <LanguageSelection
              translate={translate}
              language={settings.language}
              onChange={this.props.changeLanguage}
            />
            <Button
              variant="outlined"
              className="reset-btn"
              color="inherit"
              onClick={this.props.resetSettings}
            >
              {translate('Reset to default')}
            </Button>
          </section>
        )}
      </TranslatorContext.Consumer>
    )
  }
}

const mapDispatchToProps = {
  changeTheme: Actions.changeTheme,
  resetSettings: Actions.resetSettings,
  toggleHotKeys: Actions.toggleHotKeys,
  changeUserName: Actions.changeUserName,
  changeLanguage: Actions.changeLanguage,
  changeTimeFormat: Actions.changeTimeFormat
};

const mapStateToProps = state => ({
  settings: state.settings
});

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  resetSettings: PropTypes.func.isRequired,
  toggleHotKeys: PropTypes.func.isRequired,
  changeUserName: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  changeTimeFormat: PropTypes.func.isRequired,
};

const styledSettings = styled(Settings)`${styles}`;

export default connect(mapStateToProps, mapDispatchToProps)(styledSettings);
