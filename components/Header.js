import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../constants/colors';
import IconBtn from './IconBtn';
import ImgPath from '../constants/ImgPath';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const affichage = useSelector(state => state.affichage);
  // const [affichage,setAffichage] = useState(true);
  function changeAffichage(){
    dispatch({type: 'toggleAffichage'})
  }
  return (
    <View style={styles.header}>
              
              <Image style={styles.image} source={require("../assets/GGLogo.png")} />
              <View style={styles.headerIconsContainer}>
                <Pressable onPress={changeAffichage}>
                  <IconBtn>{affichage? ImgPath.gridView : ImgPath.listView }</IconBtn>
                </Pressable>
                
                <IconBtn>{ImgPath.cart}</IconBtn>
                
              </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height: 120,
        justifyContent:'space-between', 
        flexDirection:'row',
        paddingTop:30, 
        backgroundColor: MyColors.grey800,
    },
    image:{
        width: 60, 
        height: 50,
        margin:20
    },
    headerIconsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly', 
        alignItems:'flex-end',
        
    },
    icons:{
        width: 30, 
        height: 30,
        margin:10
    }
})