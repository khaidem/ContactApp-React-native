import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../component/CustomInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import CustomButton from '../../component/CustomButton';
let contact = [];
const AddContact = () => {
  const [username, setUsername] = useState('');
  const [PhoneNumber, setEmail] = useState('');
  const navigation = useNavigation();
  const saveContact = async () => {
    contact.push({name: username, mobile: PhoneNumber});
    await AsyncStorage.setItem('contact', JSON.stringify(contact));
    navigation.goBack()
  // let tempContact =[];
  // let x =JSON.parse(await AsyncStorage.getItem('contact'));
  // tempContact=x;
  // tempContact.map((item)=> {
  //   contact.push(item);
  // })
    // contact.push({name : username, mobile :PhoneNumber});
  
    // await AsyncStorage.setItem('contact', JSON.stringify(contact));
    // console.log("Check form AddContact",contact);
    // navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}></View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Add New Contact</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>User name</Text>
            <CustomInput
              placeholder="Name"
              value={username}
              setvalue={setUsername}

            />
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>PhoneNumber</Text>
            <CustomInput
              placeholder="Phone"
              value={PhoneNumber}
              setvalue={setEmail}
              numeric={'number-pad'}
            />
          </View>
          <CustomButton text={'Save'} onPress={saveContact}>
            {' '}
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddContact;

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
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
