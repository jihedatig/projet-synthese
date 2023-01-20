import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'

export default function ProductList({produit, onPress}) {
 

  return (
    <View style={[styles.card, styles.cardContent]}>
        <Pressable style={styles.cardInside} onPress={onPress.bind(this,produit)} >
            <Image source = {{uri:produit.image}} style = {{ width: 120, height: 80 }}/>
            <View>
                <Text style={styles.title}>{produit.nomProduit}</Text>
                <Text>{produit.prix} $</Text> 
            </View>
            
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
        width:'90%',
        height:130,
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
       paddingHorizontal:10,
    },
    cardInside:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        color:MyColors.grey800,
        marginBottom:5,
    }

})