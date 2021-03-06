import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio/Radio';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';

import { baseStyles } from './styles';
import { themes } from '../../config';

export class ThemesSelection extends React.PureComponent {
  onChange = (event, theme) =>
    this.props.onChange(theme);

  render() {
    const { className, translate, currentTheme } = this.props;

    return (
      <div className={className}>
        <Typography component="p" color="inherit" className="label">
          {translate('Interface colors')}
        </Typography>
        <RadioGroup value={currentTheme} onChange={this.onChange} className="controls">
          <FormControlLabel
            value={themes.LIGHT}
            label={translate('Light')}
            control={<Radio className="selection-radio"/>}
          />
          <FormControlLabel
            value={themes.DARK}
            label={translate('Dark')}
            control={<Radio className="selection-radio"/>}
          />
        </RadioGroup>
      </div>
    );
  }
}

ThemesSelection.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default styled(ThemesSelection)`${baseStyles}`;