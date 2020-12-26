import React from 'react';
import { FlatList, TouchableOpacity, Image, Button, View, Text, StyleSheet } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';
import { stores } from '../constants/stores'

export default function Home() {
  const renderCard = ({item}) => (
    <Card style={styles.storeContainer}>
      <Card.Cover 
        source={item.image}
        resizeMode="cover"
        style={styles.storeCover} 
      />
      <Card.Content>
        <Paragraph style={styles.storeContent}>{item.name}</Paragraph>
      </Card.Content>
    </Card>
  )
  const getCardId = (item) => item.id
  return (
    <>
      <Appbar.Header style={styles.appBarCss}>
      <Appbar.Content title="Home" />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <Card>
        <Card.Title title="Your Points" />
        <Card.Content>
          <Paragraph style={styles.points}>150</Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title title="Quick Discounts Nearby" />
        <Card.Content>
          <FlatList
            horizontal
            data={stores}
            renderItem={renderCard}
            keyExtractor={getCardId}
          />
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  appBarCss: {
    backgroundColor: 'blue'
  },
  points: {
    fontSize: 30,
    fontWeight: 600,
  },
  storeContainer: {
    margin: 10,
    minHeight: 150,
    width: 178,
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  storeContent: {
    textAlign: 'center',
  },
});
