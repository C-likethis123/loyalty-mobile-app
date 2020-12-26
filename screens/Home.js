import React from 'react';
import { TouchableOpacity, Image, Button, View, Text } from 'react-native';
import MenuIcon from '../assets/menu.svg'
export default function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Image
          source={MenuIcon}
          style={{height: 20, width: 20}}
        />
      </TouchableOpacity>
      <Text>Points</Text>
      <Text>News</Text>
      <Text>Quick Discounts Nearby</Text>
    </View>
  )
}
