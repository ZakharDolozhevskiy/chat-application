import { css } from 'styled-components';

export default css`
  display: flex;
  position: relative;
  margin: 8px 0;
  padding: 16px 0;

  .message-body {
    padding: 8px;
    width: 40%;
    margin: 0 10px;
    border-radius: 2px;
    position: relative;
    word-break: break-all;
    color: ${p => p.theme.textColor};
    background: ${p => p.theme.backgroundColor};
    border: 2px solid ${p => p.theme.secondary};
    
    &::before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: -2px;
      left: -10px;
      border-style: solid;
      border-width: 0 10px 10px 0;
      border-color: transparent ${p => p.theme.secondary} transparent transparent;
    }
  }
    
  .meta {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    top: -20px;
    font-size: 14px;
    justify-content: space-between;
    color: ${p => p.theme.textColor};
  }
  
  &.me {
     justify-content: flex-end;
  
    .meta {
      justify-content: flex-end;
    }
  
    .message-body {
      background: ${p => p.theme.backgroundColor};
      border-color: ${p => p.theme.primary};

      &::before {
        top: -2px;
        left: inherit;
        right: -10px;
        border-width: 10px 10px 0 0;
        border-color: ${p => p.theme.primary} transparent transparent transparent;
      }
    }
  }
  
  .image-link {
    display: block;
  
    img {
      display: block;
      min-width: 200px;
      min-height: 200px;
      max-width: 100%;
    }
    
    &:not(:last-child) {
      padding-bottom: 8px;
    }
  }
  
  .player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
  }
  
  .player {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .Linkify > a {
    color: ${p => p.theme.linkColor};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 700px) {
    .message-body {
      width: 50%;
    }
  }
  
   @media (max-width: 480px) {
    .message-body {
      width: 100%;
    }
  }
`;