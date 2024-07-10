import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign';

const AddContact = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.root}>
        <TouchableOpacity>
            <AntIcon name='arrowleft' color='white'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddContact

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20

    }
})