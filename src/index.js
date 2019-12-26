import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
}
