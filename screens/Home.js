import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';
import { idExtractor, stores } from '../constants/stores';

export default function Home() {
  const renderCard = ({ item }) => (
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
  );
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
            keyExtractor={idExtractor}
          />
        </Card.Content>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  appBarCss: {
    backgroundColor: 'blue',
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
  },
  storeContent: {
    textAlign: 'center',
  },
});
