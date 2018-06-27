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
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
  height: calc(100vh - 64px);
  overflow-y: auto;

  .settings-box {

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
    width: 100%;
    margin: 16px 0;
    border-color: ${p => p.theme.inputColor}; 
  }
`;

export default styles;