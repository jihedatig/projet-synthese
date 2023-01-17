import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function InputOutils({label, placeholder, inputconfig, securedField}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {securedField ? <TextInput style={styles.input} placeholder={placeholder} {...inputconfig} secureTextEntry={true}/>: 
      <TextInput style={styles.input} placeholder={placeholder} {...inputconfig} autoCapitalize='none'/>
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
        fontSize:12,
        
    },
    input:{
        flex:2,
        borderRadius:10,
        borderColor:MyColors.grey800,
        borderWidth:1,
        backgroundColor:'#FFF',
        color:MyColors.grey800,
        overflow:'hidden',
        padding:5,

    }
})