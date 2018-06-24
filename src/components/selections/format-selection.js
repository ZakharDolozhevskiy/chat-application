import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Radio from '@material-ui/core/es/Radio/Radio';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/es/RadioGroup/RadioGroup';
import FormControlLabel from '@material-ui/core/es/FormControlLabel/FormControlLabel';

import { baseStyles } from './styles';
import { timeFormats } from '../../config';

class FormatSelection extends React.PureComponent {
  onChange = (event, theme) =>
    this.props.onChange(theme);

  render() {
    const { className, translate, timeFormat } = this.props;

    return (
      <div className={className}>
        <Typography component="p" color="inherit" className="label">
          {translate('Clock displays')}:
        </Typography>
        <RadioGroup value={timeFormat} onChange={this.onChange} className="controls">
          <FormControlLabel
            value={timeFormats[12]}
            label={translate('12 Hours')}
            control={<Radio className="selection-radio"/>}
          />
          <FormControlLabel
            value={timeFormats[24]}
            label={translate('24 Hours')}
            control={<Radio className="selection-radio"/>}
          />
        </RadioGroup>
      </div>
    );
  }
}

FormatSelection.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  timeFormat: PropTypes.string.isRequired
};

export default styled(FormatSelection)`${baseStyles}`;
