import React, { useEffect, useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home/homeScreen';
import ProfileScreen from '../screen/ProfileScreen/profileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../screen/loginScreen/loginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Heading, HStack, Spinner, VStack } from 'native-base';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const[isLogged, setIsLogged] = useState(false);
  const[isLoading, setLoading] = useState(true);
  const _retriveData = async() =>{
    try{
      const data = await AsyncStorage.getItem('user');
      console.log(data);
      setIsLogged(data);
      setLoading(false);
    }catch(e){}
  }
  useEffect(()=>{
    _retriveData();
  })
  if(isLoading){
    return <VStack space={2} justifyContent="center" alignItems={'center'}  top={100}>
    <Spinner accessibilityLabel="Loading" />
    <Heading color="primary.500" fontSize="xl">
      Loading
    </Heading>
  </VStack>;
  }
  return (
    isLogged?
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tittle: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={26} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="person" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  : <LoginScreen></LoginScreen>);
};

export default TabNavigator;
