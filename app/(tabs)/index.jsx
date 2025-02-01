import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function Homescreen() {
  return (
    <View>
      <Text>Homescreen</Text>
      <Redirect href={'login'} />
    </View>
  )
}