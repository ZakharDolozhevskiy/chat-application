import { css } from 'styled-components';

export const baseStyles = css`
  .selection-radio {
    color: ${p => p.theme.inputColor} !important;
  }
  .selection-radio + span {
    color: ${p => p.theme.textColor};
  }
  .controls {
    flex-direction: row;
    padding-bottom: 16px;
    
    & > label {
      width: 130px;
    }
  }
`;