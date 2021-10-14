import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function AppCard({ image, title, subTitle }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTop}>
        <Image style={styles.cardImage} source={image} resizeMode='cover' />
      </View>
      <View style={styles.cardBottom}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

AppCard.defaultProps = {
  title: 'Red Jacket for Sale',
  subTitle: '$100',
  image: require('../assets/images/jacket.jpg'),
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    shadowColor: 'black',
    minHeight: 250,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  cardTop: {
    flex: 2,
    overflow: 'hidden',
  },
  cardBottom: {
    flex: 1,
    padding: 10,
  },
  cardImage: {
    height: '100%',
    width: '100%',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 21,
    color: 'gray',
  },
  cardSubtitle: {
    color: 'silver',
    fontSize: 20,
  },
});
