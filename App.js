import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppImagePicker from './app/components/AppImagePicker';
import AppImageList from './app/components/AppImageList';

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
      {/* <AppImagePicker /> */}
      {/* <MessagesScreen /> */}
      {/* <AppImageList /> */}
      <StatusBar style='auto' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 20,
  },
});
