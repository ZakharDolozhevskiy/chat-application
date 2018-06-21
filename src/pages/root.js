import React from "react";
import { Route, Redirect } from "react-router-dom";

import Chat from './chat';
import Header from '../components/header';
import Settings from './settings';
import { routes } from '../config';

const root = ({ path, counter }) => (
  <React.Fragment>
    <Header counter={counter} path={path}/>
    <Route exact path={routes.MAIN} component={Chat}/>
    <Route path={routes.SETTINGS} component={Settings}/>
  </React.Fragment>
);

export default root;