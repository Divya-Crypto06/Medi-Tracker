import { View, Text, StyleSheet, TextInput, FlatList, ViewComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../Constant/colors';
import {TypeList} from './../constant/Options'
import { Picker } from '@react-native-picker/picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function AddMedicationForm(){
  const [formData,setFormData]=useState();
  const onHandleInputChange=(field,value)=>{
    setFormData(prev=>({
      ...prev,
      [field]:value
    }));
    console.log(formData)
  }
  return (
    <View style={{
        padding:25
    }}>
      <Text style={styles.header}>Add New Medication</Text>
      <View style={styles.inputGroup}>
      <Ionicons style={styles.icon} name="medkit-outline" size={24} color="black" />
      <TextInput style={styles.textInput} placeholder='<Medicine Name'
      onChangeText={(value)=>onHandleInputChange('name',value)}
      />
      </View>
      <FlatList 
      data={TypeList}
      horizontal
      style={{
        marginTop:5
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <TouchableOpacity 
        style={[styles.inputGroup,{marginRight:10},
          {backgroundColor:item.name==formData?.type?.name?colors.PRIMARY:'white'}
        ]}
        onPress={()=>onHandleInputChange('type',item)}
        >
            <Text style={[styles.typeText,
              {color:item.name==formData?.type?.name?'white':'black'}]
            }>{item?.name}</Text>
        </TouchableOpacity>
      )}
      />
      {/* Dose input */}
      <View style={styles.inputGroup}>
      <Ionicons style={styles.icon} name="eyedrop-outline" size={24} color="black" />
      <TextInput style={styles.textInput} placeholder='Dose Ex. 2 , 5ml'
      onChangeText={(value)=>onHandleInputChange('dose',value)}
      />
      </View>
      {/* When To Take Dropdown */}
      <View style={styles.inputGroup}>
      <Ionicons style={styles.icon} name="time-outline" size={24} color="black" />
      <Picker 
      selectedValue={formData?.when}
      onValueChange={(itemValue,itemIndex)=>
        onHandleInputChange('when',itemValue)
      }
      style={{
        width:'90%'
      }}
      >
        {WhenToTake.map((item,index)=>(
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
      </View>

      {/* Start and End Date */}
      <View style={styles.dateInputGroup}>
      <View style={[styles.inputGroup,{flex:1}]}>
      <Ionicons style={styles.icon} name="calendar-outline" size={24} color="black" />
      <Text style={styles.text}>{formData?.startDate??'Start Date'}</Text>
      <RNDateTimePicker
      minimumDate={new Date()}
      onChange={(Event)=>console.log(Event.nativeEvent.timestamp)}
      value={formData?.startDate??new Date()}
      />
      </View>
      <View style={[styles.inputGroup,{flex:1}]}>
      <Ionicons style={styles.icon} name="calendar-outline" size={24} color="black" />
      <Text style={styles.text}>{formData?.endDate??'End Date'}</Text>
      </View>
      </View>

    </View>
  )
}

const styles=StyleSheet.create({
header:{
    fontSize:25,
    fontWeight:'bold'
},
inputGroup:{

    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:12,
    borderRadius:8,
    borderWidth:1,
    borderColor:colors.LIGHT_GRAY_BODER,
    marginTop:10,
    backgroundColor:'white'
},
textInput:{
 flex:1,
 marginLeft:10,
 fontSize:16
},
icon:{
    color:colors.PRIMARY,
    borderRightWidth:1,
    paddingRight:12,
    borderColor:colors.GRAY
},
typeText:{
    fontSize:16
},
text:{
  fontSize:16,
  padding:10,
  flex:1,
  marginLeft:10
},
dateInputGroup:{
  flexDirection:'row',
  gap:10
}
})
