import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppIcon from '../components/AppIcon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My messsages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Hasan Ali'
          subTitle='hans1998ali@gmail.com'
          image={require('../assets/images/jacket.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menu => menu.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              Icon={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title='Logout'
          Icon={<AppIcon name='logout' backgroundColor='#ffe66d' />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
