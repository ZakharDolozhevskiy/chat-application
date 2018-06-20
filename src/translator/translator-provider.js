import React from 'react';
import Translator from './translator';
import TranslatorContext from './translator-context';

export default class TranslatorProvider extends React.PureComponent {
	translator = new Translator();

	render() {
		this.translator.setLanguage(this.props.language);

		return (
			<TranslatorContext.Provider value={this.translator}>
				{this.props.children}
			</TranslatorContext.Provider>
		);
	}
}