import React from 'react';
import { mount } from 'enzyme';

import { Settings } from '../settings';
import * as config from '../../config';

jest.mock('react-router-dom', () => ({ Route: props => null }));
jest.mock('../../translator/translator-context');

describe('<Settings/>', () => {
  const settings = {
    theme: config.themes.DARK,
    hotKeys: true,
    language: config.lang.EN,
    timeFormat: config.timeFormats[24]
  };
  const fn = () => {};
  const changeUserName = jest.fn();
  const component = mount(
    <Settings
      settings={settings}
      changeTheme={fn}
      resetSettings={fn}
      toggleHotKeys={fn}
      changeLanguage={fn}
      changeTimeFormat={fn}
      changeUserName={changeUserName}
    />
  );

  it('should render root component', () => {
    expect(component.find('TextField')).toHaveLength(1);
    expect(component.find('ThemesSelection')).toHaveLength(1);
    expect(component.find('FormatSelection')).toHaveLength(1);
    expect(component.find('ShortcutsSelection')).toHaveLength(1);
    expect(component.find('LanguageSelection')).toHaveLength(1);
    expect(component.find('Button')).toHaveLength(1);
  });

  it('should handle username change', () => {
    component.instance().onUserNameChange({
      target: { value: 'new username' }
    });

    expect(changeUserName.mock.calls[0][0]).toEqual('new username');
  });
});