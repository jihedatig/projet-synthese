import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ChatInput({label, placeholder, inputconfig}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} {...inputconfig} />
       
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
        
    },
    label:{
        flex:1,
        
    },
    input:{
        flex:1,
        width:'80%',
        height:32,
        borderRadius:10,
        borderColor:MyColors.grey800,
        borderWidth:1,
        backgroundColor:'#FFF',
        color:MyColors.grey800,
        overflow:'hidden',
        padding:5,

    }
})