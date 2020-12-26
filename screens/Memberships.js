import React from 'react';
import { StyleSheet } from 'react-native';
import { Menu, Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { CardDetails, MembershipList } from './MembershipScreens'

const Stack = createStackNavigator()

export default function Memberships() {
  return (
    <Stack.Navigator initialRouteName="MembershipList">
      <Stack.Screen name="MembershipList" component={MembershipList} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  appBarCss: {
    backgroundColor: 'blue'
  },
  content: {
    backgroundColor: "white",
  }
});
