class Translator {
	constructor(translations, language = 'en') {
		this.language = language;
		this.translations = translations;
	}

	setLanguage(language) {
		this.language = language;
	}

	translate(text) {
		if (!this.translations[this.language]) {
			return text;
		} else {
			return this.translations[this.language][text];
		}
	}
}