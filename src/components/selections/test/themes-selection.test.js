import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ThemesSelection } from '../themes-selection';

import { themes } from '../../../config';

describe('<ShortcutsSelection/>', () => {
  const callback = jest.fn();

  const component = shallow(
    <ThemesSelection
      className=""
      onChange={callback}
      translate={id => id}
      currentTheme={themes.LIGHT}
    />
  );

  it('should render component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onChange callback if changes happen', () => {
    component.instance().onChange(null, themes.DARK);
    expect(callback.mock.calls[0][0]).toBe(themes.DARK);
  });
});