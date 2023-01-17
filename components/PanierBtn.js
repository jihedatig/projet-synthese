import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function PanierBtn({text, icon, onPress}) {
  return (
    <Pressable onPress={onPress}>
    <View style={styles.btnContainer}>
      <MaterialIcon name={icon} color={'#FFF'} size={24}/>
      <Text style={styles.btnText}>{text}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        width:150,
        height:40,
        padding:10,
        borderRadius:10,
        backgroundColor: MyColors.orange,
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginVertical:30,
        flexDirection:'row',
    },
    btnText:{
        width:130,
        textAlign:'center',
        color:'#FFF',
        marginStart:4,
        fontWeight:'bold'
    }
})