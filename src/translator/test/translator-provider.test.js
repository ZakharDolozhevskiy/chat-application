import React from 'react';
import { shallow } from 'enzyme';
import TranslatorProvider from '../translator-provider';

it('should render translator provider', () => {
  const component = shallow(
    <TranslatorProvider language="ENG">
      <span>Consumers</span>
    </TranslatorProvider>);

  expect(component).toMatchSnapshot();
});
