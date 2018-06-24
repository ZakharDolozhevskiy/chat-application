export default class Translator {
  constructor(translations, lang) {
    this.lang = lang;
    this.source = translations;
  }

  setLanguage = lang => {
    this.lang = lang;
  };

  translate = (text) => {
    return (this.source[this.lang] && this.source[this.lang][text])
      ? this.source[this.lang][text]
      : text;
  }
}