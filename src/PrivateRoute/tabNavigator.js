import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home/homeScreen';
import ProfileScreen from '../screen/ProfileScreen/profileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
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
  );
};

export default TabNavigator;
