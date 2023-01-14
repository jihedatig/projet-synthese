import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function BtnForm({text, icon, onPress}) {
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
        width:'80%',
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
        textAlign:'left',
        color:'#FFF',
        marginStart:4,
        fontWeight:'bold'
    }
})