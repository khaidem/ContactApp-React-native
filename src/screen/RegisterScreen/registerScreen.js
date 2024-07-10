import {
  Text,
  View,
  Image,
  height,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StackActions} from '@react-navigation/native';
import {Logo} from '../../../assets/images/logo.png';
import {NativeBaseProvider, Box, IconButton, ScrollView} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const backPressed = () => {
    navigation.goBack();
  };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async () => {
    try {
     const  setValue = JSON.stringify({username, password, email});

      await AsyncStorage.setItem('user', setValue)
      console.log("save form register",setValue)
      // navigation.replace('Register'); 
      navigation.dispatch(StackActions.replace('Home'));
      
    } catch (e) {
      console.warn('User create fail');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          {/* <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableHighlight onPress={backPressed}>
              <Icon name="arrow-left" color="black" size={50} />
            </TouchableHighlight>
            <Text style={styles.tittle}>Create Account for Free! </Text>
          </View>

          <CustomInput
            placeholder="username"
            value={username}
            setvalue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setvalue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setvalue={setPassword}
          />
          <CustomButton text="Register" onPress={storeData}></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#851C60',
    // margin: 18,
    marginLeft: 10,
    // justifyContent: 'space-between',
  },
  logo: {
    width: '100%',
    maxHeight: 300,
    maxWidth: 200,
  },
});

export default RegisterScreen;
