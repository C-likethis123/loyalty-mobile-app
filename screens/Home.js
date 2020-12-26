import React from 'react';
import { TouchableOpacity, Image, Button, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

export default function Home() {
  return (
    //   <View>
    //       <Text>Home</Text>
    //   </View>
    <Appbar.Header style = {styles.appBarCss}>
     <Appbar.Content title="Home" />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
    appBarCss: {
        backgroundColor: 'blue'
    }
});
