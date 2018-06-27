import Translator from '../translator';

const translations = { 'UA': { 'Hi': 'Biтаю' } };

const instance = new Translator(translations, 'ENG');

it('should render translator class', () => {
  expect(instance.source).toEqual(translations);
  expect(instance.lang).toEqual('ENG');
});

it('should change translator language', () => {
  instance.setLanguage('UA');
  expect(instance.lang).toEqual('UA');
});

it('should return translation if it exists in dictionary', () => {
  expect(instance.translate('Hi')).toEqual('Biтаю');
});

it('should return original string if translation missed', () => {
  expect(instance.translate('Tere!')).toEqual('Tere!');
});