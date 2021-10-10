import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View, Text } from 'react-native';

export default function AppButton({ title, onPress, style }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{ ...styles.buttonContainer, ...style }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    backgroundColor: 'coral',
    borderRadius: 20,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
