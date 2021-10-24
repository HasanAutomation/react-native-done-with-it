import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function AppTextInput({ icon, ...rest }) {
  return (
    <View style={styles.textInputContainer}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={23} color={colors.medium} />
      )}
      <TextInput style={styles.textInput} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    padding: 12,
    backgroundColor: colors.light,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },
  textInput: {
    borderWidth: 0,
    marginLeft: 5,
    flex: 1,
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.dark,
  },
});
