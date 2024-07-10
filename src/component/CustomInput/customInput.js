import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({numeric,value, setvalue, placeholder, secureTextEntry}) => {
  return (
    
      <TextInput style={styles.inputControl} keyboardType={numeric} value={value} placeholder={placeholder} 
      onChangeText={setvalue} secureTextEntry={secureTextEntry}></TextInput>
  
  )
}

const styles= StyleSheet.create({
  // container: {
  //   backgroundColor: 'white',
  //   width: '100%',

  //   borderColor: '#e8e8e8',
  //   borderWidth: 1,
  //   borderRadius: 5,

  //   paddingHorizontal: 10,
  //   marginVertical: 5,
  // },
  inputControl: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
})
export default CustomInput