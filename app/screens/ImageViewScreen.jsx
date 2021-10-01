import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ImageViewScreen() {
  return (
    <View style={styles.imageViewContainer}>
      <View style={styles.actionsContainer}>
        <View
          style={{
            ...styles.actionButton,
            backgroundColor: 'red',
          }}
        ></View>
        <View style={{ ...styles.actionButton }}></View>
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/images/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageViewContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  actionsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
  actionButton: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
