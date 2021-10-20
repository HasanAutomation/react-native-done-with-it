import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    title: 'Red Jacket for sale',
    subTitle: '$100',
    image: require('../assets/images/jacket.jpg'),
  },
  {
    title: 'Tshirt',
    subTitle: '$100',
    image: require('../assets/images/jacket.jpg'),
  },
  {
    title: 'Jeans Pant',
    subTitle: '$100',
    image: require('../assets/images/jacket.jpg'),
  },
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 10,
  },
});

export default ListingsScreen;
