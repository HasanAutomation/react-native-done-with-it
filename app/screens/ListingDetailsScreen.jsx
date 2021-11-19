import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen({ route }) {
  const {
    item: { image, subTitle, title },
  } = route.params;

  return (
    <View>
      <Image
        resizeMode='cover'
        source={require('../assets/images/jacket.jpg')}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{subTitle}</Text>
      </View>
      <View style={styles.owner}>
        <ListItem
          title='Hasan'
          subTitle='5 Listings'
          image={image || require('../assets/images/jacket.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  owner: {
    marginTop: 5,
    padding: 20,
  },
  price: {
    fontSize: 20,
    color: 'coral',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 10,
  },
});
