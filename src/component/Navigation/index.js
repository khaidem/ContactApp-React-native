import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import loginScreen from '../../screen/loginScreen';
import RegisterScreen from '../../screen/RegisterScreen/registerScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name='Regiser' component={RegisterScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

