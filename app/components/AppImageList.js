import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppImagePicker from './AppImagePicker';

export default function AppImageList({ images, handleAdd, handleRemove }) {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {images.length > 0 &&
          images.map(img => (
            <View style={styles.image} key={img}>
              <AppImagePicker
                imageUri={img}
                onChangeUri={() => handleRemove(img)}
              />
            </View>
          ))}
        <AppImagePicker onChangeUri={handleAdd} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    marginRight: 10,
  },
});
