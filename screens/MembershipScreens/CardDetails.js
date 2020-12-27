import React from 'react';
import { Image, View, Text, FlatList, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import CardImage from '../../assets/card.jpg';

export default function CardDetails({ route }) {
  const { shopName, membershipNumber, loyaltyPoints } = route.params
  return (
    <View style={styles.root}>
      <Appbar.Header style={styles.appBarCss}>
        <Appbar.Content title={shopName} />
      </Appbar.Header>
      <View style={styles.content}>
        <View>
          <Image source={CardImage} style={styles.card} />
        </View>
        <View>
          <Text>
            {membershipNumber}
          </Text>
        </View>
        <View>
          <Text>{loyaltyPoints}</Text>
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  appBarCss: {
    backgroundColor: 'blue'
  },
  root: {
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    height: 200,
    width: 370,
    borderRadius: '10px',
  }
});
