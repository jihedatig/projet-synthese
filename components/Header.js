import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors';

export default function Header() {
  return (
    <View style={styles.header}>
              
              <Image style={styles.image} source={require("../assets/GGLogo.png")} />
              <View style={styles.headerIconsContainer}>
                <Image style={styles.icons} source={require("../assets/Profile.png")} />
                <Image style={styles.icons} source={require("../assets/Cart.png")} />
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