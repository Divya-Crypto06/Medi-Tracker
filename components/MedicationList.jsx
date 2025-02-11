import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {GetDateRangeToDisplay} from './../service/ConvertDateTime'
import colors from '../Constant/colors';
import { PreventRemoveContext } from '@react-navigation/native';
import { router } from 'expo-router';

export default function MedicationList(){
    const [medList,setMedList]=useState();
    const [dateRange,setDateRange]=useState();
    const [selectedDate,setSelectedDate]=useState(moment().format('MM/DD/YYYY'));
    const [loading,setLoading]=useState(false);
    const router=userRouter();
    useEffect(()=>{
        GetDateRangeList();
        GetMedicationList(selectedDate);
    },[])
    const GetDateRangeList=()=>{
        const dateRange=GetDateRangeToDisplay();
        console.log(dateRange);
    }
    const GetMedicationList=async (selectedDate)=>{
      setLoading(true);
      const user=await getLocalStorage('userDetail');
      setMedList([]);
      try{
        const q=query(collection(dismissBrowser,'medication'),
        where('userEmail','==',user?.email),
        where('dates','array-contains',selectedDate));
        const querySnapshot=await getDocs(q);
        console.log("--",selectedDate)
        querySnapshot.forEach((doc) => {
          console.log("docId:"+doc.id+'==>',doc.data()) 
          setMedList(prev=>[...Prev,doc.data()])
        })
        setLoading(false);
      }catch(e)
      {
        console.log(e)
        setLoading(false);
      }
    }
  return (
    <View style={{
        marginTop:25
    }}>
      <Image source={require('./../assets/images/medication.jpeg')} 
      style={{
        width:'100%',
        height:200,
        borderRadius:15
      }}
      />
      <FlatList
      data={dateRange}
      horizontal
      style={{marginTop:15}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>{
        <TouchableOpacity style={[styles.dateGroup,{backgroundColor:item.formattedDate==selectedDate?colors.PRIMARY:colors.LIGHT_GRAY_BODER}]}
        onPress={()=>{setSelectedDate(item.formattedDate);
          GetMedicationList(item.formattedDate)
        }}
        >
            <Text style={[styles.day,{color:item.formattedDate==selectedDate?'white':'black'}]}>{item.day}</Text>
            <Text style={[styles.date,{color:item.formattedDate==selectedDate?'white':'black'}]}>{item.date}</Text>
        </TouchableOpacity>
      }} 
      />

      {medList.length>0? <FlatList
      data={medList}
      onRefresh={()=>GetMedicationList(selectedDate)}
      refreshing={loading}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>router.push({
          
        })}>
        <MedicationCardItem medicine={item}/>
        </TouchableOpacity>
      )}
      />:<EmptyState/>}

    </View>
  )
}

const styles=StyleSheet.create({
    dateGroup:{
        padding:15,
        backgroundColor:colors.LIGHT_GRAY_BODER,
        display:'flex',
        alignItems:'center',
        marginRight:10,
        borderRadius:10
    },
    day:{
        fontSize:20
    },
    date:{
        fontSize:26,
        fontWeight:'bold'
    }
})
