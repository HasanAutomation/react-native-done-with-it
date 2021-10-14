import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function ImageViewScreen() {
  return (
    <View style={styles.imageViewContainer}>
      <View style={styles.actionsContainer}>
        <MaterialCommunityIcons name='close' color='white' size={30} />
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='red'
          size={30}
        />
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
    backgroundColor: colors.black,
  },
  actionsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '80%',
  },
});
