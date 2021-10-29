import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ToastAndroid,
  Switch,
} from 'react-native';
import Constants from 'expo-constants';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageViewScreen from './app/screens/ImageViewScreen';
import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppIcon from './app/components/AppIcon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import colors from './app/config/colors';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <WelcomeScreen /> */}
    //   {/* <ImageViewScreen /> */}
    //   {/* <ListingDetailsScreen /> */}
    //   {/* <AppCard /> */}
    //   <MessagesScreen />
    //   <StatusBar style='auto' />
    // </SafeAreaView>
    <Screen>
      {/* <ListingDetailsScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <ImageViewScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AppIcon name='email' size={100} /> */}
      {/* <ListItem title='My Title' Icon={Icon} /> */}
      {/* <AccountScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <AppTextInput placeholder='Username' icon='email' /> */}
      {/* <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        placeholder='Category'
        icon='apps'
        items={categories}
      /> */}
      <LoginScreen />
      <StatusBar style='auto' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f8f4f4',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
