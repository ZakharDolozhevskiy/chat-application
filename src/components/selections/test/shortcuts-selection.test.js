import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ShortcutsSelection } from '../shortcuts-selection';

describe('<ShortcutsSelection/>', () => {
  const callback = jest.fn();

  const component = shallow(
    <ShortcutsSelection
      className=""
      onChange={callback}
      translate={id => id}
      hotKeys={true}
    />
  );

  it('should render component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onChange callback if changes happen', () => {
    component.instance().onChange(null, true);
    expect(callback.mock.calls[0][0]).toBeTruthy();
  });
});