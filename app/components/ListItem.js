import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  onLongPress,
}) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode='cover' />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
