import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, About, Login, Memberships, PointsTransfer } from './screens'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon:({ focused, color, size }) => {
                let iconName;
                if (route.name == 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                } else if (route.name == 'About') {
                    iconName=focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            }
        })}
        tabBarOptions={{activeTintColor: 'blue', inactiveTintColor: 'gray'}}
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
