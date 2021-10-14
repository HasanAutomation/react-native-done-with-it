import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

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
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
