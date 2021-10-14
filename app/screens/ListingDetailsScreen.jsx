import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        resizeMode='cover'
        source={require('../assets/images/jacket.jpg')}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
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
