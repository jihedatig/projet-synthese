import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function Quantity({inc, dec, qty}) {
    // const [productQt, setProductQt] = useState(1);
    // function removeHandler(){
    //   if (productQt>0){
    //     let currentQt = productQt -1;
    //     setProductQt(currentQt);
    //   }
      
    // }
    // function addHandler(){
    //   let currentQt = productQt + 1;
    //   setProductQt(currentQt);
    // }
  return (
    <View style={styles.container}>
      <Pressable onPress={dec}>
      <View style={styles.btn}><MaterialIcon name='remove' color='#FFF' size={18}/></View>
      </Pressable>
      <View><Text style={styles.sign}>{qty}</Text></View>
      <Pressable onPress={inc}>
      <View style={styles.btn}><MaterialIcon name='add' color='#FFF' size={18}/></View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:MyColors.grey700,
        width:96,
        height:40,
        padding:4,
        borderRadius:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:MyColors.grey650,
        justifyContent:'center',
        alignItems:'center',
    },
    sign:{
        color:'#FFF',
        textAlign:'center',
        
    }
})