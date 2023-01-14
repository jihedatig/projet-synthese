import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Btn({text, icon, onPress, color, tcolor}) {
  const btnBg = {backgroundColor:color}
  const textcolor ={color:tcolor}
  const iconcolor = tcolor
  return (
    <Pressable onPress={onPress}>
    <View style={[styles.btnContainer, btnBg]}>
      <MaterialIcon name={icon} color={iconcolor} size={24}/>
      <Text style={[styles.btnText, textcolor]}>{text}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        width:'80%',
        height:40,
        padding:10,
        borderRadius:20,
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginVertical:10,
        flexDirection:'row',
    },
    btnText:{
        width:130,
        textAlign:'left',
        color:MyColors.grey400,
        marginStart:4,
    }
})