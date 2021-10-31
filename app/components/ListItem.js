import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  onLongPress,
  Icon,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <View style={styles.container}>
          {image && (
            <Image source={image} style={styles.image} resizeMode='cover' />
          )}
          {Icon}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && (
              <Text numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons name='chevron-right' size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
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
    padding: 7,
    justifyContent: 'center',
    flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
  },
});

ListItem.defaultProps = {
  // image: require('../assets/images/jacket.jpg'),
  // title: 'Hasan Ali',
  // subTitle: '5 Listings',
};
