import React from 'react';
import Translator from './translator';
import TranslatorContext from './translator-context';

import en from './translations/en';
import ua from './translations/ua';

export default class TranslatorProvider extends React.PureComponent {
  constructor() {
    super();
    this.translator = new Translator({ en, ua });
  }

  render() {
    this.translator.setLanguage(this.props.language);

    return (
      <TranslatorContext.Provider value={this.translator.translate}>
        {this.props.children}
      </TranslatorContext.Provider>
    );
  }
}