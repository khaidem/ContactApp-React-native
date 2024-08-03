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

import {useDispatch} from 'react-redux';
import {register} from '../../reducer/auth';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [error, setError] = useState({});
 

  const validateForm = () => {
    let error = {};
    if (!username) error.username = 'UserName is required';
    if (!email) error.email = 'Email is required';
    if(!password) error.password = 'password is required';
    setError(error);
    return Object.keys(error).length === 0;
  };
  const handleRegister = async (e) => {
    if(validateForm()){
      e.preventDefault();
 
      dispatch(
        register({
          username: username,
          email: email,
          password: password,
        }),
      );
     const Data =await AsyncStorage.setItem('user', JSON.stringify({username,password}));
     console.log("Save register", Data)
      navigation.dispatch(StackActions.replace('Home'));
    }
  
  };

  // const storeData = async () => {
  //   try {
  //     // const setValue = JSON.stringify({username, password, email});

  //     // await AsyncStorage.setItem('user', username);
  //     // await AsyncStorage.setItem('password', password);
  //     // await AsyncStorage.setItem('email', email);
  //     // console.log('save form register',email );

  //     navigation.dispatch(StackActions.replace(routes.HOME_TAB));
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}></View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account for Free! </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>User name</Text>
            <CustomInput
              placeholder="username"
              value={username}
              setvalue={setUsername}
            />
            
          </View>
          {error.username ? (
            <Text style={styles.errorText}>{error.username}</Text>
          ) : null}
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Gmail</Text>
            <CustomInput
              placeholder="Gmail"
              value={email}
              setvalue={setEmail}
            />
          </View>
          {error.username ? (
            <Text style={styles.errorText}>{error.email}</Text>
          ) : null}
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <CustomInput
              placeholder="Password"
              value={password}
              setvalue={setPassword}
            />
          </View>
          {error.username ? (
            <Text style={styles.errorText}>{error.password}</Text>
          ) : null}
          <CustomButton onPress={(e) => handleRegister(e)} text={'Save'}></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    alignContent: 'center',
    justifyContent: 'center',
    flexGrow: 0.4,
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  form: {
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  logo: {
    width: '100%',
    maxHeight: 300,
    maxWidth: 200,
  },
});

export default RegisterScreen;
