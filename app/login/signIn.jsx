import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function signIn(){
  return (
    <View style={{
        padding:25
    }}>
      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been missed</Text>

    <View style={{
      marginTop:25
    }}>
      <Text>Email</Text>
      <TextInput placeholder='Email' style={styles.textInput}/>
    </View>
    <View style={{
      marginTop:25
    }}>
      <Text>Password</Text>
      <TextInput placeholder='Password'
      secureTextEntry={true} style={styles.textInput}
      />
    </View>
    <TouchableOpacity style={styles.button}>
      <Text>Login</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    textHeader:{
        fontsize:30,
        fontWeight:'bold',
        marginTop:15
    },
    subText:{
        fontsize:30,
        fontWeight:'bold',
        marginTop:10,
        color:Colors.GRAY
    },
    textInput:{
      padding:10,
      borderWidth:1,
      fontSize:17,
      borderRadius:10,
      marginTop:5,
      backgroundColor:'white'
    },
    button:{
      padding:20
    }
})