import React from "react";
import { Route } from "react-router-dom";
import Chat from './chat';
import Settings from './settings';
import Header from '../components/header';

const root = () => (
	<React.Fragment>
		<Header/>
		<Route exact path="/" component={Chat} />
		<Route path="/settings" component={Settings} />
	</React.Fragment>
);

export default root;