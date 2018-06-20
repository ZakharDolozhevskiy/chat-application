import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Root from './pages/root';
import themes from './styles/themes/index';
import TranslatorProvider from './translator/translator-provider';

export class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={themes[this.props.settings.theme]}>
				<TranslatorProvider language={this.props.settings.language}>
					<BrowserRouter>
						<Root/>
					</BrowserRouter>
				</TranslatorProvider>
			</ThemeProvider>
		)
	}
}

const mapStateToProps = ({ settings }, ownProps) => ({ settings });

export default connect(mapStateToProps)(App);