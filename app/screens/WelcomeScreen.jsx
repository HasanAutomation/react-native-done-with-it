import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen({ navigation }) {
  function onLogin() {
    navigation.navigate('Login');
  }
  function onSignUp() {
    navigation.navigate('Register');
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/logo-red.png')}
        />
        <Text style={styles.heading}>Sell You don't need anymore</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='LOGIN' onPress={onLogin} style={styles.loginButton} />
        <AppButton
          title='SIGNUP'
          onPress={onSignUp}
          style={styles.signUpButton}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  logoImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 17,
  },
  buttonsContainer: {
    width: '100%',
  },
  loginButton: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 21,
  },
  signUpButton: {
    marginBottom: 10,
    backgroundColor: 'red',
  },
});
