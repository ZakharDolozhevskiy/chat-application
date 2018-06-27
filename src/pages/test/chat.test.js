import React from 'react';
import moment from 'moment';
import { Chat } from '../chat';
import { mount } from 'enzyme';
import { timeFormats, routes } from '../../config';

jest.mock('lodash.throttle', () => fn => fn);
jest.mock('../../translator/translator-context');
jest.mock('@material-ui/core/Tooltip', () => ({ children }) => children);
jest.mock('@material-ui/core/Popover', () => ({ open, children }) => open ? children : null);

describe('<Chat/>', () => {
  const sendMessage = jest.fn();
  const messages = [
    { user: 'Max', message: 'Hey', timestamp: moment() },
    { user: 'Max', message: 'Hey', timestamp: moment(), imageLinks: ['z.png'] },
    { message: 'Hey', timestamp: moment(), videoLinks: ['youtube.com?zzz'] },
  ];

  const component = mount(
    <Chat
      hotKeys
      path={routes.MAIN}
      username="Me"
      sendMessage={sendMessage}
      timeFormat={timeFormats[24]}
      messages={messages}
    />
  );

  const instance = component.instance();

  it('should render chat component', () => {
    expect(component.find('Message')).toHaveLength(3);
    expect(component.find('TextField')).toHaveLength(1);
    expect(component.find('IconButton')).toHaveLength(2);
  });

  it('should set focus to text input', () => {
    expect(component.find('TextField').prop('autoFocus')).toBeTruthy();
  });

  it('should render popover with emoji', () => {
    expect(component.find('.emoji-picker')).toHaveLength(0);

    component.find('IconButton').at(0).simulate('click');

    expect(component.state('anchorEl')).toBeDefined();
    expect(component.find('.emoji-picker')).not.toHaveLength(0);
  });

  it('should not send empty message', () => {
    component.setState({ message: '' });
    component.find('IconButton').at(1).simulate('click');

    expect(sendMessage).not.toHaveBeenCalled();
  });

  it('should send message by button click', () => {
    component.setState({ message: 'Hello!' });
    component.find('IconButton').at(1).simulate('click');

    expect(sendMessage.mock.calls[0][0]).toEqual({
      message: 'Hello!',
      username: "Me"
    });

    sendMessage.mockReset();
  });

  it('should send message by Enter key press', () => {
    component.setState({ message: 'Hey!' });
    instance.onEnterKeyPress({ keyCode: 13 });

    expect(sendMessage.mock.calls[0][0]).toEqual({
      message: 'Hey!', username: 'Me'
    });

    sendMessage.mockReset();
  });

  it('should send message with shortcuts if hotKeys enabled', () => {
    component.setState({ message: ':)' });
    instance.trackHotKeys({ keyCode: 13, metaKey: true });

    expect(sendMessage.mock.calls[0][0]).toEqual({
      message: ':)', username: 'Me'
    });

    sendMessage.mockReset();
  });

  it('should handle text input changes', () => {
    component.setState({ message: '' });

    instance.onInputChange({ target: { value: '!!!' } });

    expect(component.state('message')).toEqual('!!!');
  });

  it('should handle emoji selection', () => {
    component.setState({ message: '' });

    instance.onEmojiSelect(null, { name: 'smile' });

    expect(component.state('message')).toEqual(':smile:');
  });

  it('should add emoji to message with whitespace', () => {
    component.setState({ message: '...' });

    instance.onEmojiSelect(null, { name: 'smile' });

    expect(component.state('message')).toEqual('... :smile:');
  });

  it('should handle popover close event', () => {
    component.setState({ anchorEl: true });
    expect(component.state('anchorEl')).toBeTruthy();

    instance.closePopover();
    expect(component.state('anchorEl')).toBeNull();
  });

  it('should update scroll position if new message added', () => {
    const spy = jest.spyOn(instance, 'updateScrollPosition');

    component.setProps({
      messages: [
        ...messages,
        { user: 'Max', message: 'Hey', timestamp: moment() }
      ]
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should not update scroll position if chat view is inactive', () => {
    expect(instance.msgList.current.scrollTop).toBe(0);

    component.setProps({ path: routes.SETTINGS });
    component.update();

    expect(instance.msgList.current.scrollTop).toBe(0);
  });

  it('should not cause errors in componentWillUnmount', () => {
    component.unmount();
  });
});