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
        <View style={[styles.container, styles.content]}>
          <Text>Membership No.</Text>
          <Text style={styles.text}>
            {membershipNumber}
          </Text>
        </View>
        <View style={[styles.container, styles.content]}>
          <Text>Loyalty Points</Text>
          <Text style={styles.text}>{loyaltyPoints}</Text>
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
    height: 150,
    width: 270,
    borderRadius: '10px',
  },
  container: {
    border: '1px solid black',
    height: 100,
    width: 305,
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: '#2925FB',
    fontFamily: "'Roboto', 'Helvetica Neue'",
    fontWeight: 800,
    fontSize: 24,
  }
});
