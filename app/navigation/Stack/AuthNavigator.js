import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import Screen from '../../components/Screen';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name='Welcome'
      component={WelcomeScreen}
    />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Register' component={RegisterScreen} />
  </Stack.Navigator>
);
