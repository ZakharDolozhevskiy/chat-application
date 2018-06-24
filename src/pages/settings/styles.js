import { css } from 'styled-components';
import { headerHeight } from '../../components/header/styles';

const styles = css`
  box-sizing: border-box;
  position: fixed;
  top: ${headerHeight};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  z-index: 2001;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};

  .settings-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${headerHeight});
  }

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