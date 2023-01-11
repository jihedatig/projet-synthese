import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'

export default function IconBtn({children}) {
  return (
    
        <Image style={styles.icon} source={children} />
 
    
  )
}

const styles = StyleSheet.create({
    icon:{
        width: 30, 
        height: 30,
        margin:10
    }
})