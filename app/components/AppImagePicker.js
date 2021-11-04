import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import colors from '../config/colors';

export default function AppImagePicker({ imageUri, onChangeUri }) {
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission denied');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      onChangeUri(result.uri);
    }
  };

  const onPress = () => {
    if (imageUri) {
      Alert.alert('Are you sure?', 'Are you sure you want to delete?', [
        {
          text: 'Cancel',
          onPress: () => {
            return;
          },
        },
        {
          text: 'OK',
          onPress: () => {
            onChangeUri(null);
          },
        },
      ]);
    } else {
      pickImage();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.imageContainer}
      onPress={onPress}
    >
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode='cover'
        />
      ) : (
        <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
