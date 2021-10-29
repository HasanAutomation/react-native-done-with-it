import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.text}>{error}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
});
