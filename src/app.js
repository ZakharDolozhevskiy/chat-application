import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router'

import Root from './pages/root';
import themes from './themes/index';
import { history } from './store';
import TranslatorProvider from './translator/translator-provider';

export class App extends React.Component {
  render() {
    const { settings, counter, path } = this.props;

    return (
      <ThemeProvider theme={themes[settings.theme]}>
        <TranslatorProvider language={settings.language}>
          <ConnectedRouter history={history}>
            <Root counter={counter} path={path} />
          </ConnectedRouter>
        </TranslatorProvider>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (store) => ({
  path: store.router.location.pathname,
  counter: store.messages.count,
  settings: store.settings
});

export default connect(mapStateToProps)(App);