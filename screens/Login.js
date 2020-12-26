import React from 'react';
import { Text, Button } from 'react-native';

export default function Login({navigation}) {
  return (
    <Button 
      onPress={() => navigation.navigate('Home')}
      title="Login"
    />
  )
}
