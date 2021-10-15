import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function ListItemDeleteAction({ onPress }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        onPress={onPress}
        name='trash-can-outline'
        color='white'
        size={23}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListItemDeleteAction;
