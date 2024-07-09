import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({navigation}) => {
   const [count,setCount]=useState(0)
  useEffect(()=>{
     const userData=getData();
   //  const user=userData? JSON.parse(userData):null;
    //  if(user==null){
    //   navigation.navigate('Register')
    //  }
     console.log(">>>>>>>>>>>>>user ",userData)
     if(true){
      navigation.navigate('Login')
     }

  },[navigation])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
     return null
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})