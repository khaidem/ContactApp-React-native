import { View, StyleSheet, Image, useWindowDimensions, Alert,  } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../component/CustomInput';

import CustomButton from '../../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';




const LoginScreen = (props) => {
    const {height} =useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const getData =async() => {
      try{
        
      const getValue= await  AsyncStorage.getItem('user');
      const userData = getValue != null ? JSON.parse(getValue): null;
      // const user= valueObj.username;
      // const pass = valueObj.password;
      console.log(userData)
      // if(getValue == null){
      
      // }
     
      }catch(e){
        console.warn(e)
      }
    }
    const onSignUpPressed =() => {
     props.navigation.navigate('Register')
     
   
    }

  
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />
      <CustomInput placeholder="username" value={username} setvalue={setUsername}/>
      <CustomInput placeholder="password" value={password} setvalue={setPassword} secureTextEntry={true} />
      <CustomButton text="SigIn" onPress={getData}></CustomButton>
      <Pressable onPress={onSignUpPressed}>
        <Text>Create new account</Text>
      </Pressable>
    </View>
  )
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        maxHeight: 300,
        maxWidth: 200,
    }
})

export default LoginScreen