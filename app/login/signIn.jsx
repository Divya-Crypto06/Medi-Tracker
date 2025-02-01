import { View, Text, StyleSheet } from 'react-native'
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
    }
})