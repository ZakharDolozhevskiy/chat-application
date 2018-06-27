import React from 'react';
import toJson from 'enzyme-to-json';
import { FormatSelection } from '../format-selection';
import { shallow } from 'enzyme';

import { timeFormats } from '../../../config';

describe('<FormatSelection/>', () => {
  const callback = jest.fn();

  const component = shallow(
    <FormatSelection
      className=""
      onChange={callback}
      translate={id => id}
      timeFormat={timeFormats[24]}
    />
  );

  it('should render component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onChange callback if changes happen', () => {
    component.instance().onChange(null, timeFormats[12]);
    expect(callback.mock.calls[0][0]).toBe(timeFormats[12]);
  });
});