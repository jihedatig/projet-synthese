import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ChatBtn({text, icon, onPress, color, tcolor}) {
  const btnBg = {backgroundColor:color}
  const textcolor ={color:tcolor}
  const iconcolor = tcolor
  return (
    <Pressable onPress={onPress}>
    <View style={[styles.btnContainer, btnBg]}>
      <MaterialIcon name={icon} color={iconcolor} size={24}/>
      
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        
        height:40,
        padding:10,
        borderRadius:20,
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginVertical:10,
        flexDirection:'row',
    },
    btnText:{
        
        textAlign:'left',
        color:MyColors.grey400,
        marginStart:4,
    }
})