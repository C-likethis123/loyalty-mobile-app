import React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

export default function About() {
  return (
    <Appbar.Header style = {styles.appBarCss}>
     <Appbar.Content title="About" />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
    appBarCss: {
        backgroundColor: 'blue'
    }
});
