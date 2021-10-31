import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import PickerItem from './PickerItem';

export default function AppPicker({
  icon,
  onSelectItem,
  items,
  placeholder,
  selectedItem,
  style,
}) {
  const [open, setOpen] = useState(false);

  const onSelect = item => {
    onSelectItem(item);
    setOpen(false);
  };

  return (
    <View style={[styles.textInputContainer, style]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={23} color={colors.medium} />
      )}
      {selectedItem ? (
        <Text style={styles.text}>{selectedItem.label}</Text>
      ) : (
        <Text style={styles.placeholder}>{placeholder}</Text>
      )}

      <MaterialCommunityIcons
        name='chevron-down'
        size={23}
        color={colors.medium}
        onPress={() => setOpen(true)}
      />
      {open && (
        <View style={styles.customModal}>
          <Modal animationType='slide' visible={open}>
            <FlatList
              data={items}
              keyExtractor={item => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItem onPress={() => onSelect(item)} label={item.label} />
              )}
            />
          </Modal>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    color: colors.medium,
    flex: 1,
    fontSize: 17,
  },
  textInputContainer: {
    padding: 12,
    backgroundColor: colors.light,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },

  text: {
    flex: 1,
    color: colors.dark,
  },
});
