import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Box,
  Button,
  Center,
  Fab,
  FlatList,
  Heading,
  HStack,
  SectionList,
  StatusBar,
  VStack,
} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {useNavigation, useIsFocused} from '@react-navigation/native';
import {FloatingAction} from 'react-native-floating-action';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = props => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactL, setContactList] = useState([]);

  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    const contactData = await AsyncStorage.getItem('contact');
    const contactList = JSON.parse(contactData);
    console.log('Check Form ContactList', contactList);

    setContactList(groupContactByFirstChar(contactList));
  };
  // Function to group contacts by the first character of their name
  function groupContactByFirstChar(contactList) {
    const groupedContacts = {};
    contactList.forEach(e => {
      const firstchar = e.name.charAt(0).toUpperCase();
      if (!groupedContacts[firstchar]) {
        groupedContacts[firstchar] = [];
      }
      groupedContacts[firstchar].push(e);
    });
    console.log('Check groupContact', groupedContacts);

    const groupArray = Object.keys(groupedContacts)
      .sort()
      .map(firstchar => ({
        title: firstchar,
        data: groupedContacts[firstchar],
      }));
    console.log('Check GroupArray', groupArray);
    return groupArray;
  }

  return (
    <View style={styles.viewStyle}>
      <Heading fontSize="xl">Contact List</Heading>
      <SectionList
        sections={contactL}
        keyExtractor={(item, index) => item.mobile + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>
              Name : <Text style={styles.textStyle}>{item.name}</Text>
            </Text>
            <Text>
              Mobile : <Text style={styles.textStyle}>{item.mobile}</Text>
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}></SectionList>
      <TouchableOpacity
        style={styles.styleButton}
        onPress={() => {
          navigation.navigate('AddContact');
        }}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </View>
    // <Box padding="5">
    //   <Heading fontSize="xl">Contact List</Heading>
    //   <SectionList
    //     sections={contactL}
    //     keyExtractor={(item, index) => item.mobile + index}
    //     renderItem={({item}) =>   <View style={styles.item}>
    //     <Text>{item.name} - {item.mobile}</Text>
    // </View>}
    //     renderSectionHeader={({ section: { title } }) => (
    //       <View style={styles.header}>
    //           <Text style={styles.headerText}>{title}</Text>
    //       </View>
    //   )}
    //     >

    //     </SectionList>
    //     <TouchableOpacity
    //     style={styles.styleButton}
    //     onPress={() => {
    //       navigation.navigate('AddContact');
    //     }}>
    //     <Text style={{color: 'white'}}>Add</Text>
    //   </TouchableOpacity>

    // </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
  viewStyle: {
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  headerText: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  styleButton: {
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
  },
});
