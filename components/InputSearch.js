import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function InputSearch({label, placeholder, inputconfig, onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...inputconfig} autoCapitalize='none'/>
      <Pressable onPress={onPress}>
    <View style={styles.btnContainer}>
      <MaterialIcon name='search' color='#FFF' size={24}/>
      
    </View>
    </Pressable>
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

    },
    btnContainer:{
      height:30,
      padding:4,
      borderRadius:4,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:MyColors.grey700,
      marginStart:4,
  },
})