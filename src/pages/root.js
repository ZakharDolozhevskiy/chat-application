import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import Chat from './chat';
import Header from '../components/header';
import Settings from './settings';
import { routes } from '../config';

const root = ({ path, counter, className }) => (
  <section className={className}>
    <Header counter={counter} path={path}/>
    <Route exact path={routes.MAIN} component={Chat}/>
    <Route path={routes.SETTINGS} component={Settings}/>
  </section>
);

export default styled(root)`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100%;
    margin: 0 auto;
`;