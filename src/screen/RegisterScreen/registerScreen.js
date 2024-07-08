import { Text, View , StyleSheet, TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../component/CustomInput'
import CustomButton from '../../component/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Box, IconButton } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';





const RegisterScreen = () => {
    const navigation = useNavigation();
   
  
    const backPressed =() => {
        navigation.goBack();
    }
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [RestPassword, setRestPassword] = useState('');
    const storeData = async () => {
      try {
       
        setValue = JSON.stringify({username, password,email});
        console.warn(username,password,email)
        await AsyncStorage.setItem('user' ,setValue).then(()=> {
          console.warn("Save Successfully")
        });
        navigation.goBack();
      } catch (e) {
        console.warn('There was an error saving the product')
      }
    };
   
  return (
    <SafeAreaView>
         <View style={styles.root}>
       
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
           
            <TouchableHighlight onPress={backPressed}>
               
                <Icon name="arrow-left" color='black' size={50} />
                
            </TouchableHighlight>
            <Text style={styles.tittle}>Create an account?</Text>
        
        
        </View>
       
        
        
    <CustomInput placeholder="username" value={username} setvalue={setUsername}/>
    <CustomInput placeholder="Email" value={email} setvalue={setEmail}/>
    <CustomInput placeholder="Password" value={password} setvalue={setPassword} />
    {/* <CustomInput placeholder="" value={RestPassword} setvalue={setRestPassword}/> */}
    <CustomButton text="Register" onPress={storeData}></CustomButton>
    {/* <CustomButton text="checkData" onPress={getData}></CustomButton> */}
  
  </View>
    </SafeAreaView>
   
  )
}



const styles= StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    tittle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#851C60',
        // margin: 18,
        marginLeft: 10,
        justifyContent: 'space-between'
    }
})

export default RegisterScreen