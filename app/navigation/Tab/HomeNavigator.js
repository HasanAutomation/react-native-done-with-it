import React from 'react';
import { FeedNavigator } from '../Stack/FeedNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingEditScreen from '../../screens/ListingEditScreen';
import { AccountNavigator } from '../Stack/AccountNavigator';
import NewListingButton from '../NewListingButton';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name='Home'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name='ListingsEdit'
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingsEdit')}
          />
        ),
      })}
    />
    <Tab.Screen
      name='Account'
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='account' size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
