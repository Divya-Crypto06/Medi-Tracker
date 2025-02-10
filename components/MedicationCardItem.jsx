import { View, Text } from 'react-native'
import React from 'react'
import colors from '../Constant/colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MedicationCardItem(medicine){
  return (
    <View style={styles?.container}>
        <View style={styles.subContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri:medicine?.type?.icon}}
        style={{
            width:60,
            height:60
        }} />
      </View>
      <View>
        <Text style={{fontSize:22,fontWeight:'bold'}}>{medicine?.name}</Text>
        <Text style={{fontSize:17}}>{medicine?.when}</Text>
        <Text style={{color:'white'}}>{medicine?.dose} {medicine?.type.name}</Text>
      </View>
    </View>
    <View> style={styles.reminderContainer}
    <Ionicons name="timer-outline" size={24} color="black" />
        <Text style={{fontweight:'bold',fontSize:18}}>{medicine?.reminder}</Text>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:10,
        // backgroundColor:colors.PRIMARY,
        borderWidth:1,
        borderColor:colors.LIGHT_GRAY_BODER,
        marginTop:10,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center'
    },
    imageContainer:{
        padding:10,
        backgroundColor:'white',
        borderRadius:15,
        marginRight:15
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    reminderContainer:{
        padding:13,
        backgroundColor:'white',
        borderRadius:15,
        alignItems:'center',
        borderWidth:1,
        borderColor:colors.LIGHT_GRAY_BODER
    }
})
