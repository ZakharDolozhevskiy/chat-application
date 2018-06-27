import React from 'react';
import toJson from 'enzyme-to-json';
import { Header } from '../index';
import { mount } from 'enzyme';

import { routes } from '../../../config';

jest.mock('../../../translator/translator-context');
jest.mock('react-router-dom', () => ({ NavLink: props => props.children }));

describe('<Header/>', () => {
  const component = mount(
    <Header path={routes.MAIN} className="" counter={0}/>
  );

  it('should render header component', () => {
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('.badge').length).toBe(0);
  });

  it('should render header with unread messages badge', () => {
    component.setProps({ path: routes.SETTINGS, counter: 10 });

    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('.badge').length).not.toBe(0);
  });
});