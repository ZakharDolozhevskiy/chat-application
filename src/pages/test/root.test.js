import React from 'react';
import toJson from 'enzyme-to-json';
import { Root } from '../root';
import { shallow } from 'enzyme';

import { routes } from '../../config';

jest.mock('react-router-dom', () => ({ Route: props => null }));

describe('<Root/>', () => {
  const component = shallow(
    <Root
      counter={0}
      path={routes.MAIN}
      translate={id => id}
      className=""
    />
  );

  it('should render root component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});