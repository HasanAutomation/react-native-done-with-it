import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
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
        <Text>Sell You don't anymore</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            ...styles.button,
            backgroundColor: 'red',
          }}
        >
          <Text>Hello</Text>
        </View>
        <View
          style={{
            ...styles.button,
          }}
        >
          <Text>Hi</Text>
        </View>
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
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
    // left: '30%',
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
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});
