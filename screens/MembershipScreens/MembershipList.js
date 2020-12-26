import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Menu, Appbar} from 'react-native-paper';
import { idExtractor, stores } from '../../constants/stores';

export default function MembershipList({navigation}) {
  const renderCard = ({item}) => (
    <Menu.Item
      onPress={() => navigation.navigate('CardDetails', {
        shopName: item.name,
        membershipNumber: '12345a',
        loyaltyPoints: 40,
      })}
      icon="card-text"
      title={item.name}
    />
  )
  return (
    <View style={styles.content}>
      <Appbar.Header style={styles.appBarCss}>
        <Appbar.Content title="Memberships" />
      </Appbar.Header>
      <FlatList
        data={stores}
        renderItem={renderCard}
        keyExtractor={idExtractor}
      />
    </View>)
}

const styles = StyleSheet.create({
  appBarCss: {
    backgroundColor: 'blue'
  },
  content: {
    backgroundColor: "white",
  }
});
