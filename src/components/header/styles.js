import { css } from 'styled-components';

export const headerHeight = '64px';

export default css`
  background-color: #2196f3 !important;

  & > div {
    height: ${headerHeight};
  }

  .nav-link {
    display: inline-block;
    margin-right: 8px;
    text-decoration: none;
    color: #fff;
  }
  
  .active {
    border-bottom: 2px solid;
  }
  
  .badge > span {
    border: 1px solid;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #2196f3;
  }
  
  @media (max-width: 600px) {
    & > div {
      padding: 0 4px;
      min-height: 56px;
    }

    .badge > span {
      top: -8px;
      right: -8px;
    }
  }
`;