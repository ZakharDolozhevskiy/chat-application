import React from 'react';
import moment from 'moment'
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Message } from '../index';

import { timeFormats } from '../../../config';

describe('<Header/>', () => {
  const component = shallow(
    <Message
      timestamp={moment("20111031")}
      timeFormat={timeFormats[24]}
      message=""
      user="Sender"
    />
  );

  it('should render message component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render plain text in the component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render own messages without username', () => {
    component.setProps({ user: null});
    expect(component.find('.me').length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render text with url in <a/> tag with target = _blank', () => {
    component.setProps({ message: 'https://momentjs.com/' });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render video player if youtube links provided', () => {
    component.setProps({ videoLinks: ['youtube link'] });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render link wrapped with <a/> if image links provided', () => {
    component.setProps({ imageLinks: ['link to img 1', 'link to img 2'] });
    expect(toJson(component)).toMatchSnapshot();
  });
});