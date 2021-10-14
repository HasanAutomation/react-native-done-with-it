import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function ZoomImage({ mode, uri, style }) {
  return (
    <ImageZoom
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageHeight={Dimensions.get('screen').height}
      imageWidth={Dimensions.get('screen').width}
    >
      <Image
        resizeMode={mode}
        source={uri}
        style={{ ...styles.image, ...style }}
      />
    </ImageZoom>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
