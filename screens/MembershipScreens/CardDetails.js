import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Menu, Appbar} from 'react-native-paper';
import { idExtractor, stores } from '../../constants/stores'

export default function CardDetails({shopName, membershipNumber, loyaltyPoints}) {
  return (
    <View style={styles.content}>
      <Appbar.Header style={styles.appBarCss}>
        <Appbar.Content title={shopName} />
      </Appbar.Header>
      <View>
        <View>
          <Text>Picture of card</Text>
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
  content: {
    backgroundColor: "white",
  }
});
