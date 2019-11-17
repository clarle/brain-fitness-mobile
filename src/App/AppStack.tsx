import React from 'react';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import {Icon, Header} from 'react-native-elements'

import HomeScreen from './Home/HomeScreen';
import SettingsScreen from './Settings/SettingsScreen';
import LessonScreen from './Lesson/LessonScreen';
import { createAppContainer } from 'react-navigation';

const Menu = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Lesson: LessonScreen
}, {
  initialRouteName: 'Lesson'
});

export default createAppContainer(Menu)
