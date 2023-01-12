import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Btn({text, icon, onPress}) {
  return (
    <Pressable onPress={onPress}>
    <View style={styles.btnContainer}>
      <MaterialIcon name={icon} color={MyColors.grey400} size={24}/>
      <Text style={styles.btnText}>{text}</Text>
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
        backgroundColor: MyColors.grey800,
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