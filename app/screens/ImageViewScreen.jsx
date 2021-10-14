import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import ZoomImage from '../components/ZoomImage';

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
      <ZoomImage
        uri={require('../assets/images/chair.jpg')}
        mode='contain'
        style={{ height: '80%' }}
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
});
