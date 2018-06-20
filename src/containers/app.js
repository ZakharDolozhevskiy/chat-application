import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from "react-router-dom";

import Chat from './chat';
import Header from '../components/header';
import Settings from './settings';
import TranslatorProvider from '../translator/translator-provider';
import themes from '../styles/themes';

export class App extends React.Component {
	render() {
		console.log(this.props.settings.language);
		return (
			<TranslatorProvider language={this.props.settings.language}>
				<ThemeProvider theme={themes[this.props.settings.theme]}>
					<BrowserRouter>
						<React.Fragment>
							<Header/>
							<Route exact path="/" component={Chat} />
							<Route path="/settings" component={Settings} />
						</React.Fragment>
					</BrowserRouter>
				</ThemeProvider>
			</TranslatorProvider>
		)
	}
}

const mapStateToProps = ({ settings }, ownProps) => ({ settings });

export default connect(mapStateToProps)(App);