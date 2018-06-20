import React from 'react';
import Translator from './translator';
import TranslatorContext from './translator-context';

import en from './translations/en';
import ru from './translations/ru';

export default class TranslatorProvider extends React.PureComponent {
	constructor() {
		super();
		this.translator = new Translator({ en, ru });
	}

	render() {
		this.translator.setLanguage(this.props.language);

		return (
			<TranslatorContext.Provider value={this.translator}>
				{this.props.children}
			</TranslatorContext.Provider>
		);
	}
}