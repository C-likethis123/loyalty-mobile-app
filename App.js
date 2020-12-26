import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, About, Login, Memberships, PointsTransfer } from './screens'

const Stack = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        drawerPosition="right"
        drawerContentOptions={{
          activeBackgroundColor: "#748FEF",
          activeTintColor: "#FFFFFF",
        }}
        drawerStyle={{
          backgroundColor: "#74DBEF",
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Memberships" component={Memberships} />
        <Stack.Screen name="PointsTransfer" component={PointsTransfer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
