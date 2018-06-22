import React from 'react';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { routes } from '../config';
import TranslatorContext from '../translator/translator-context';

export class Header extends React.PureComponent {
  withBadge = (button) =>
    (this.props.path !== routes.MAIN && this.props.counter > 0)
      ? <Badge color="primary" badgeContent={this.props.counter}>
          {button}
        </Badge>
      : button;

  render() {
    return (
      <TranslatorContext.Consumer>
        {({ translate }) => (
          <AppBar position="static" color="inherit" className={this.props.className}>
            <Toolbar>
              <NavLink exact to="/" className="nav-link">
                {this.withBadge(<Button color="inherit">{translate('Chat')}</Button>)}
              </NavLink>
              <NavLink exact to="/settings" className="nav-link">
                <Button color="inherit">{translate('Settings')}</Button>
              </NavLink>
            </Toolbar>
          </AppBar>)}
      </TranslatorContext.Consumer>
    )
  }
}

export default styled(Header)`
  .nav-link {
    display: inline-block;
    margin-right: 8px;
    text-decoration: none;
  }
  
  .active {
    color: red;
  }
`;
