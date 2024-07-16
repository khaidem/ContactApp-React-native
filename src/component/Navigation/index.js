import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../screen/RegisterScreen/registerScreen';
import LoginScreen from '../../screen/loginScreen/loginScreen';
import TabNavigator from '../../PrivateRoute/tabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AddContact from '../../screen/Contact/addContact';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AddContact" component={AddContact} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
