import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function PickerItem({ onPress, label }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemText: {
    padding: 20,
    fontSize: 20,
  },
});
