import { View,Text,Image } from 'react-native'
import React from 'react'
import colors from '../../constant/Colors'
import { TouchableOpacity } from 'react-native-web'
import { useRouter } from 'expo-router'


export default function LogininScreen(){
  const router=useRouter();
  return (
    <View style={{
      height:450,
      display:'flex',
      alignItems:'center',
      borderRadius:23,
      marginTop:40,
    }}>
      <Image source={require('/Users/divyasrikatta/Documents/ReactNative/medi-track/assets/images/login.png')} />
      <View style={
        {
          padding:25,
          backgroundColor:colors.PRIMARY,
          height:'100%'
        }
      }>
      <Text style={{
        fontsize:30,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'
      }}>Stay on Track,Stay Healthy</Text>

      <Text style={{
        color:'white',
        textAlign:'center',
        fontSize:17,
        marginTop:20
      }}>Track your meds,take control of your health. Stay consistent,stay confident</Text>

      <TouchableOpacity 
      style={{
        padding:15,
        backgroundColor:'white',
        borderRadius:99,
        marginTop:25
      }}
      onPress={()=>router.push('login/signIn')} >
        <Text style={{
          textAlign:'center',
          fontSize:16,
          color:colors.PRIMARY
        }}>Continue</Text>

      </TouchableOpacity>
      <Text style={{
        color:'white',
        marginTop:4
      }}>Note: By Clicking Continue button,you will agree to our terms and conditions.</Text>
    </View>
    </View>
 
    
  )
}
