import { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: ${p => p.theme.textColor};

  .username-field {
    flex-direction: row;
    padding-bottom: 16px;
    
    div, label {
      color: ${p => p.theme.textColor};
    }
  
    div::before, div::after { 
      border-color: ${p => p.theme.inputColor} !important; 
    }
  }

  .reset-btn {
    margin: 16px 0;
    border-color: ${p => p.theme.inputColor}; 
  }
`;

export default styles;