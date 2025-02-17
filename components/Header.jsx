import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {getLocalStorage} from '../service/Storage'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../Constant/colors';

export default function Header(){

    const [user,setUser]=useState();
    const router=router();
    useEffect(()=>{
        GetUserDetail();
    },[])
    const GetUserDetail=async ()=>{
        const userInfo=await getLocalStorage('userDetail');
        console.log(userInfo);
        setUser(userInfo);
    }
  return (
    <View style={{
        marginTop:20,
        width:'100%'
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%'
        }}>
    <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    }}>
      <Image source={require('./../assets/images/smiley.png')}
       style={{
        width:45,
        height:45
       }}
       />
       <Text style={{
        fontSize:25,
        fontweight:'bold'
       }}>Hello {user?.displayName} 👋</Text>
</View>
<TouchableOpacity onPress={()=>router.push('/add-new-medication')}>
<Ionicons name="medkit-outline" size={34} color={colors.PRIMARY }/>
</TouchableOpacity>
</View>
    </View>
  )
} 
