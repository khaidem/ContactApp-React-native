import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import TabNavigator from './src/PrivateRoute/tabNavigator';
import LoginScreen from './src/screen/loginScreen/loginScreen';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/component/Navigation';

const Tab = createBottomTabNavigator();

// Short Cut for renfes => reactNative
const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
       
       <Navigation/>
     
      </NativeBaseProvider>
    </SafeAreaView>
  );
};
export default App;
// export function TabNavigator() {
//   return (
//         <Tab.Navigator screenOptions={{ headerShown: false } } >

//            <Tab.Screen  name='HomeScreen' component={HomeScreen} options={{tittle: "Home", tabBarIcon: ({color,size})=>
//              {
//               return <Icon name="home" color={color} size={26} />
//              }
//            }}/>
//            <Tab.Screen  name='SettingsScreen' component={SettingsScreen} options={{tabBarIcon: ({color,size}) => {
//             return <Icon name="person" color={color} size={size}/>
//            }}}/>
//         </Tab.Navigator>
//    )
// }
// const HomeScreen = () => {

//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//        <Stack.Screen name="MainPage" component={MainPage} />
//        <Stack.Screen component={Homepage} name="Home"/>
//     </Stack.Navigator>
//   )
// }

//   const SettingsScreen=()=> {
//     return (
//       <View style={styles.container}>
//         <Text>SettingsScreen</Text>
//       </View>
//     )
//     }
// const MainPage=({navigation})=> {
//   return (
//     <View style={styles.container}>

//     <Button

//         // Some properties given to Button
//         title="Click"
//         onPress={() => navigation.navigate('Home')}
//     />
// </View>

//   )
// }
// const Homepage=(props)=> {
//   return(
//     <View style={{flex:1, justifyContent: "center", alignItems: 'center'}}>
//       <Button title="Back" onPress={()=>  props.navigation.goBack()}></Button>

//     </View>
//   )
// }

// Some styles given to button
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,

//       alignItems: 'center',
//       justifyContent: 'center',
//   },
// });
