import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageViewScreen from './app/screens/ImageViewScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* <ImageViewScreen /> */}
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
