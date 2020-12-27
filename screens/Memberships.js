import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardDetails, MembershipList } from './MembershipScreens';
import { Appbar } from 'react-native-paper';

const Stack = createStackNavigator();

export default function Memberships() {
  return (
    <Stack.Navigator
      initialRouteName="MembershipList"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const title =
            scene.descriptor.options.title || scene.route.params.shopName;
          return (
            <Appbar.Header style={{ backgroundColor: 'blue' }}>
              {previous && <Appbar.BackAction onPress={navigation.goBack} />}
              <Appbar.Content title={title} />
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen
        options={{ title: 'Memberships' }}
        name="MembershipList"
        component={MembershipList}
      />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
  );
}
