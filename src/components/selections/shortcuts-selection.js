import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Radio from '@material-ui/core/Radio/Radio';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';

import { baseStyles } from './styles';

export class ShortcutsSelection extends React.PureComponent {
  onChange = (event, theme) =>
    this.props.onChange(theme);

  render() {
    const { className, translate, hotKeys } = this.props;

    return (
      <div className={className}>
        <Typography component="p" color="inherit" className="label">
          {translate('Send message on CTRL+ENTER')}:
        </Typography>
        <RadioGroup onChange={this.onChange} value={`${hotKeys}`} className="controls">
          <FormControlLabel
            value="true"
            label={translate('On')}
            control={<Radio className="selection-radio"/>}
          />
          <FormControlLabel
            value="false"
            label={translate('Off')}
            control={<Radio className="selection-radio"/>}
          />
        </RadioGroup>
      </div>
    );
  }
}

ShortcutsSelection.propTypes = {
  hotKeys: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default styled(ShortcutsSelection)`${baseStyles}`;
