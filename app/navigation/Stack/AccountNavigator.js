import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AccountScreen from '../../screens/AccountScreen';
import MessagesScreen from '../../screens/MessagesScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name='AccountScreen'
      component={AccountScreen}
    />
    <Stack.Screen name='Messages' component={MessagesScreen} />
  </Stack.Navigator>
);
