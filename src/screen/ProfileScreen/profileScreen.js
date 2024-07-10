import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Center, Fab,  } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';


const ProfileScreen = ({navigation}) => {
  const storeData =() => {
    
      AsyncStorage.removeItem('user')
      navigation.dispatch(StackActions.replace('Login'));
     
  
  };
  return (
    
   
      <Center>
        <Text>Profile</Text>
      </Center>
  
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})  