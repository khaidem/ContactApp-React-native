import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../screen/RegisterScreen/registerScreen';
import LoginScreen from '../../screen/loginScreen/loginScreen';
import TabNavigator from '../../PrivateRoute/tabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AddContact from '../../screen/Contact/addContact';
import PrivateRoute from '../../PrivateRoute/privateRoute';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
  
      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={TabNavigator}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name='AddContact' component={AddContact}/>
        <Stack.Screen name='Private' component={PrivateRoute}/>
       
      </Stack.Navigator>
    
  );
};

export default Navigation;
