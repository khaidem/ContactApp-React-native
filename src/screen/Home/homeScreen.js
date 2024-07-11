import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Box, Button, Fab, FlatList, Heading, HStack, VStack} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native-svg';
import {images} from '../../../assets/images/images.png';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {FloatingAction} from 'react-native-floating-action';

const HomeScreen = props => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState([]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    // const user = await AsyncStorage.getItem('user');
    // const pass = await AsyncStorage.getItem('password');
    // if(user !=null || pass != null){
    //   navigation.navigate('Home')

    // }else {
    //   navigation.navigate('Login')
    // }
    const contactData = await AsyncStorage.getItem('contact');
    setContactList(JSON.parse(contactData));
    console.log("Check Form Home",JSON.parse(contactData));
  };
  return (
    <Box padding="5">
      <Heading fontSize="xl">Contact List</Heading>
      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                alignItems: 'center',
              }}>
              <Text>{item.name.toUpperCase()}</Text>
              <Text style={{marginLeft: 20}}>{item.mobile}</Text>
            </View>
          );
        }}></FlatList>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          top: 650,
          right: 20,
          height: 70,
          backgroundColor: 'red',
          borderRadius: 100,
        }}
        onPress={() => {
          navigation.navigate('AddContact');
        }}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#cccccc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
