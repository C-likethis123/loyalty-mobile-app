import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View>
      <Appbar.Header style={styles.appBarCss}>
        <Appbar.Content title="About" />
      </Appbar.Header>
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
    </View>
  );
}

const styles = StyleSheet.create({
  appBarCss: {
    backgroundColor: 'blue',
  },
});
