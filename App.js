import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import Constants from 'expo-constants';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageViewScreen from './app/screens/ImageViewScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* <ImageViewScreen /> */}
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    // padding: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
