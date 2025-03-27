import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/FirebaseConfig';
export default function TabLayout() {
  const router=useRouter();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
      // ...
    } else {
      router?.push('/login')
    }
  });
  return (
    <Tabs screenOptions={{
      headerShown:false
    }}>
        <Tabs.Screen name='index'
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color,size}) =>(
          <FontAwesome name="home" size={size} color="color" />
        )
      }} />
        <Tabs.Screen name='AddNew'
        options={{
          tabBarLabel:'Add New',
          tabBarIcon:({color,size}) =>(
          <FontAwesome name="plus-square" size={size} color="color" />
        )
      }} />
        <Tabs.Screen name='Profile'
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color,size}) =>(
          <FontAwesome name="user" size={size} color="color" />
        )
      }} />
    </Tabs>
  )
}

