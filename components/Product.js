import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Product({nomProduit, prix, image, onPress, details}) {
 

  return (
    <View style={[styles.card, styles.cardContent]}>
        <Pressable onPress={onPress.bind(this,nomProduit, prix, image, details)} >
            <Image style={styles.image} source={image}/>
            <Text>{nomProduit}</Text>
            <Text>{prix}</Text>
        </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        maxWidth:100,
        maxHeight:100,
        margin:10
    },
    card:{
        width:160,
        height:160,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius:20,
        margin:10,
        padding:5,
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        
    },
    cardContent:{
        justifyContent:'center',
        alignItems:'center'
    }

})