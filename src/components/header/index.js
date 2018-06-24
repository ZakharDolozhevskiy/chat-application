import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { routes } from '../../config';
import TranslatorContext from '../../translator/translator-context';

import styles from './styles';

export class Header extends React.Component {
  withBadge = (button) =>
    (this.props.path !== routes.MAIN && this.props.counter > 0)
      ? <Badge className="badge" badgeContent={this.props.counter}>
          {button}
        </Badge>
      : button;

  render() {
    return (
      <TranslatorContext.Consumer>
        {(translate) => (
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

Header.propTypes = {
  className: PropTypes.string,
  counter: PropTypes.number.isRequired,
  path: PropTypes.oneOf([routes.MAIN, routes.SETTINGS]).isRequired
};

export default styled(Header)`${styles}`;
