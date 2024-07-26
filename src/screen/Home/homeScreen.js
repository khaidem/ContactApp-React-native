import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
 
  Divider,

  Heading,
  HStack,
 
  SectionList,
  StatusBar,
  VStack,
} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {useNavigation, useIsFocused} from '@react-navigation/native';

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

    const groupArray = Object.keys(groupedContacts)
      .sort()
      .map(firstchar => ({
        title: firstchar,
        data: groupedContacts[firstchar],
      }));
    console.log('Contact Data', groupArray);
    return groupArray;
  }

  //Function to delete Item form array one by one
  const deleteContact = async mobile => {
    try {
      const contactD = await AsyncStorage.getItem('contact');
      const contactUp = JSON.parse(contactD);

      const update = contactUp.filter(function (e) {
        return e.mobile !== mobile;
      });
      console.log('Check UpDate', update);
      await AsyncStorage.setItem('contact', JSON.stringify(update));
      setContactList(update);
    } catch (error) {
      console.error(error);
    }
  };

  //Function to edit the Item form async Storage
  const editContact = async (userName, usermobile) => {
    const editData = await AsyncStorage.getItem('contact');
    let contactUpdate =[];
    if(editData !== null)
      contactUpdate = JSON.parse(editData);
      const updateContact = contactUpdate.filter(n => {
        if(n.mobile === contactUpdate.mobile){
          n.name = userName
          n.mobile = usermobile
        }
        return n;
      })
      
      setContactList(updateContact);
    await AsyncStorage.setItem('contact', JSON.stringify(updateContact))
    
  }

  return (
    <View style={styles.viewStyle}>
      <Heading fontSize="30">Contact List</Heading>
      <Divider
        my="2"
        _light={{
          bg: 'muted.800',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
      <SectionList
        extraData={contactL}
        sections={contactL}
        keyExtractor={(item, index) => item.mobile + index}
        renderItem={({item}) => (
          <VStack space={2}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <VStack>
                <Text style={styles.firstText}>
                  Name :<Text style={styles.textStyle}>{item.name}</Text>
                </Text>
                <Text style={styles.firstText}>
                  Mobile : <Text style={styles.textStyle}>{item.mobile}</Text>
                </Text>
              </VStack>
              <HStack space={4}>
                <TouchableOpacity onPress={()=> navigation.navigate('AddContact')} >
                  <AntIcon name="edit" color="green" size={20}></AntIcon>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={() => deleteContact(item.mobile)}>
                  <AntIcon name="delete" color="black" size={20}></AntIcon>
                </TouchableOpacity>
              </HStack>
            </HStack>
            <Divider
              my="2"
              _light={{
                bg: 'muted.800',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
          </VStack>
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
        <AntIcon name="plus" color="white" size={50}></AntIcon>
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
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  firstText: {
    fontSize: 20,
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
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    top: 650,
    right: 20,
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
});
