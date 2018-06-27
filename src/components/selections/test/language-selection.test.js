import React from 'react';
import toJson from 'enzyme-to-json';
import { LanguageSelection } from '../language-selection';
import { shallow } from 'enzyme';

import { lang } from '../../../config';


describe('<LanguageSelection/>', () => {
  const callback = jest.fn();

  const component = shallow(
    <LanguageSelection
      className=""
      onChange={callback}
      translate={id => id}
      language={lang.EN}
    />
  );

  it('should render component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onChange callback if changes happen', () => {
    component.instance().onChange({ target: { value: lang.UA } });
    expect(callback.mock.calls[0][0]).toBe(lang.UA);
  });
});