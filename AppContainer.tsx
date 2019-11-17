import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './src/LoadingScreen';
import AuthStack from './src/Auth/AuthStack';
import AppStack from './src/App/AppStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
