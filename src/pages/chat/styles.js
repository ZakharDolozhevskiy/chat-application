import { css } from 'styled-components';

const styles = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};

  .messages {
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
  
  .controls {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    
    button {
      z-index: 2000;
      color: ${p => p.theme.inputColor};
    }
  }
  
  .text-input {
    width: 100%;
    margin-right: 8px;
    
    & > div {
      color: ${p => p.theme.textColor};

      &::before, &::after { 
        border-color: ${p => p.theme.inputColor} !important; 
      }
    }
  }
`;

export default styles;