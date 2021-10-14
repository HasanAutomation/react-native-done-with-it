import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode='cover' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  subTitle: {
    fontSize: 18,
    color: colors.medium,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
  },
});

ListItem.defaultProps = {
  image: require('../assets/images/jacket.jpg'),
  title: 'Hasan Ali',
  subTitle: '5 Listings',
};