import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.root}>
      <Appbar.Header style={styles.appBarCss}>
        <Appbar.Content title="About" />
      </Appbar.Header>
      <View>
        <Text>Images used were taken from the following sources:</Text>
        <Text>
          Coffee Logo:{' '}
          <a href="https://www.freepik.com/vectors/logo">
            Logo vector created by sergey_kandakov - www.freepik.com
          </a>
        </Text>
        <Text>
          Soup image:{' '}
          <a href="https://www.freepik.com/photos/food">
            Food photo created by azerbaijan_stockers - www.freepik.com
          </a>
        </Text>
        <Text>
          Loyalty cards:{' '}
          <a href="https://www.freepik.com/vectors/logo">
            Logo vector created by freepik - www.freepik.com
          </a>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  appBarCss: {
    backgroundColor: 'blue',
  },
});
