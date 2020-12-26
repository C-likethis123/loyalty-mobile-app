import React from 'react';
import { TouchableOpacity, Image, Button, View, Text, StyleSheet } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';
import IKEA from '../assets/ikea.jpg'
export default function Home() {
  return (
    <>
      <Appbar.Header style={styles.appBarCss}>
      <Appbar.Content title="Home" />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <Card>
        <Card.Title title="Your Points" />
        <Card.Content style={styles.points}>
          150
        </Card.Content>
      </Card>
      <Card>
        <Card.Title title="Quick Discounts Nearby" />
        <Card style={styles.storeContainer}>
          <Card.Cover 
            source={IKEA}
            resizeMode="cover"
            style={styles.storeCover} />
          <Card.Content>
            <Paragraph style={styles.storeContent}>IKEA</Paragraph>
          </Card.Content>
        </Card>
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
    fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  storeContainer: {
    border: '1px black solid',
    minHeight: 150,
    width: 178,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  storeContent: {
    textAlign: 'center',
  },
});
