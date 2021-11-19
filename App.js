import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabNavigator } from './app/navigation/Tab/HomeNavigator';
import { AuthNavigator } from './app/navigation/Stack/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const loggedIn = true;

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {loggedIn ? <HomeTabNavigator /> : <AuthNavigator />}
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
