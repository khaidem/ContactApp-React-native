import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const PrivateRoute = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const user = await AsyncStorage.getItem('user');
    const pass = await AsyncStorage.getItem('password');
    if(user !==null || user !==undefined ||user !==''){
      navigation.navigate('Home')
    }else {
      navigation.navigate('Login')
    }
  };
  return (
    <View>
      <Text>PrivateRoute</Text>
    </View>
  );
};

export default PrivateRoute;

const styles = StyleSheet.create({});
