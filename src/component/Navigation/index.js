import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../../screen/RegisterScreen/registerScreen';
import LoginScreen from '../../screen/loginScreen/loginScreen';
import TabNavigator from '../../PrivateRoute/tabNavigator';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
  
      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="TabNavigator" component={TabNavigator}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
       
       
      </Stack.Navigator>
  
  );
};

export default Navigation;
