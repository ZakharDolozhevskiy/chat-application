import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Chat from './chat';
import Header from '../components/header/index';
import Settings from './settings';
import { routes } from '../config';

export class Root extends React.PureComponent {
  render() {
    const { path, counter, className } = this.props;

    return (
      <section className={className}>
        <Header counter={counter} path={path}/>
        <Route path={routes.MAIN} component={Chat}/>
        <Route path={routes.SETTINGS} component={Settings}/>
      </section>
    );
  }
}

Root.propTypes = {
  path: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default styled(Root)`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    margin: 0 auto;
    color: ${p => p.theme.textColor};
    background-color: ${p => p.theme.backgroundColor};
`;