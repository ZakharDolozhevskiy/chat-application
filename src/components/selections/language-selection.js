import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import FormControl from "@material-ui/core/es/FormControl/FormControl";

import { lang } from '../../config';

class LanguageSelection extends React.PureComponent {
  onChange = (event) =>
    this.props.onChange(event.target.value);

  render() {
    const { className, translate, language } = this.props;

    return (
      <FormControl className={className}>
        <InputLabel
          htmlFor="language-select"
          className="language-select-label"
        >
          {translate('Language')}:
        </InputLabel>
        <Select
          value={language}
          onChange={this.onChange}
          className="language-select"
          classes={{ icon: 'language-select-icon' }}
          inputProps={{ id: 'language-select' }}>
          <MenuItem value={lang.EN}>{translate('English')}</MenuItem>
          <MenuItem value={lang.UA}>{translate('Ukrainian')}</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

LanguageSelection.propTypes = {
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default styled(LanguageSelection)`
  .language-select-label {
    color: ${p => p.theme.textColor} !important;
  }
  .language-select {
    color: ${p => p.theme.textColor};

    svg {
      fill: ${p => p.theme.inputColor};
    }

    &::after, &::before { 
      border-color: ${p => p.theme.inputColor} !important;
    }
  }
`;