import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Chat from './chat';
import Header from '../components/header/index';
import Settings from './settings';
import { routes } from '../config';

const root = ({ path, counter, className }) => (
  <section className={className}>
    <Header counter={counter} path={path}/>
    <Route path={routes.MAIN} component={Chat}/>
    <Route path={routes.SETTINGS} component={Settings}/>
  </section>
);

root.propTypes = {
  path: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default styled(root)`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    margin: 0 auto;
    color: ${p => p.theme.textColor};
    background-color: ${p => p.theme.backgroundColor};
`;