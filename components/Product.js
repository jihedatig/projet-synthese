import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Product({produit, onPress}) {
  

  return (
    <View style={[styles.card, styles.cardContent]}>
        <Pressable style={{justifyContent:'center', alignItems:'center'}} onPress={onPress.bind(this,produit)} >
        <Image source = {{uri:produit.image}} style = {{ width: 120, height: 80 }}/>
            <Text>{produit.nomProduit}</Text>
            <Text>{produit.prix} $</Text>
        </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        Width:120,
        Height:80,
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