import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Input({label, placeholder, inputconfig, securedField}) {
  return (
    <View style={styles.container}>
      <MaterialIcon style={styles.label} name={label} color={MyColors.grey800} size={24}/>
      {securedField ? <TextInput style={styles.input} placeholder={placeholder} {...inputconfig} secureTextEntry={true}/>: 
      <TextInput style={styles.input} placeholder={placeholder} {...inputconfig} />
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:'8%',
        paddingVertical:'2%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:4,
        backgroundColor:MyColors.grey600,
    },
    label:{
        flex:1,
        
    },
    input:{
        flex:3,
        borderRadius:10,
        borderColor:MyColors.grey800,
        borderWidth:1,
        backgroundColor:'#FFF',
        color:MyColors.grey800,
        overflow:'hidden',
        padding:5,

    }
})