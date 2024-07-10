import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Box, Button, Fab, FlatList, Heading, HStack,  } from 'native-base'
import AntIcon from 'react-native-vector-icons/AntDesign';


const HomeScreen = (props) => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
  }];
   const [count,setCount]=useState(0)
  useEffect(()=>{
     const userData=getData();
 
     console.log(">>>>>>>>>>>>>user ",userData)
    //  if(true){
    //   props.navigation.navigate('Login')
    //  }

  },[props.navigation])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
       jsonValue != null ? JSON.parse(jsonValue) : null;
       console.log("Home Check",jsonValue)
       return jsonValue;
      
    } catch (e) {
      // error reading value
    }
  };
  return (
    
    <Box padding="5">
    <Heading fontSize="xl">
      Contact List
    </Heading>
    <FlatList data={data} renderItem={({
    item
  }) => <Box borderBottomWidth="1" _dark={{
    borderColor: "muted.50"
  }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
          <HStack space={2} justifyContent="space-between">
            
              <Text _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{
          color: "warmGray.200"
        }}>
                {item.recentText}
              </Text>
            <Text fontSize="xs" _dark={{
        color: "warmGray.50"
      }} color="coolGray.800" alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>} keyExtractor={item => item.id} />
        <Fab  shadow={2} right={5} bottom={70} 
      size="sm" icon={<AntIcon  color="white" name="plus"  />} />
  </Box>
  
  )
  
}

export default HomeScreen

const styles = StyleSheet.create({})