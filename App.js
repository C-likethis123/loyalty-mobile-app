import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, About, Login, Memberships, PointsTransfer } from './screens'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Memberships" component={Memberships} />
        <Stack.Screen name="PointsTransfer" component={PointsTransfer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
