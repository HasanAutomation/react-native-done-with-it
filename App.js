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
import AppCard from './app/components/AppCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ImageViewScreen /> */}
      <AppCard />
      <AppCard />
      <AppCard />
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
