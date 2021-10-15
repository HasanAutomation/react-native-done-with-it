import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const messages = [
  {
    id: 1,
    title: 'Important',
    description: 'This is an important description',
    image: require('../assets/images/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Important',
    description:
      'This is an important description This is an important description This is an important description This is an important description',
    image: require('../assets/images/jacket.jpg'),
  },
  {
    id: 3,
    title: 'Important',
    description: 'This is an important description',
    image: require('../assets/images/jacket.jpg'),
  },
];

export default function MessagesScreen() {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectItem = id => {
    setSelectedIds([...selectedIds, id]);
  };
  const deSelectItem = itemId => {
    setSelectedIds(selectedIds.filter(id => id !== itemId));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <View style={selectedIds.includes(item.id) && styles.highlighted}>
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onLongPress={() => selectItem(item.id)}
              onPress={() => deSelectItem(item.id)}
            />
          </View>
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  highlighted: {
    backgroundColor: colors.light,
  },
});
