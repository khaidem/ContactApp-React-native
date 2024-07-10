import { View } from 'native-base'
import React from 'react'
import { Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'

function customButton({onPress, text}) {
  return (
    <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: "100%",

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,


    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
    formAction: {
      marginTop: 4,
      marginBottom: 16,
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      backgroundColor: '#075eec',
      borderColor: '#075eec',
    },

})

export default customButton