import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIcon from './AppIcon';

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <AppIcon
        onPress={onPress}
        name={item.icon}
        backgroundColor={item.backgroundColor}
        size={80}
      />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: '33%',
    // justifyContent: 'center',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
