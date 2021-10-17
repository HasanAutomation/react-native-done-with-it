import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppIcon({
  name,
  size = 30,
  backgroundColor = 'red',
  iconColor = 'white',
}) {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    borderRadius: 15,
  },
});

export default AppIcon;
