import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'

export default function ProductList({produit, onPress}) {
 

  return (
    <View style={styles.card}>
        <Pressable style={styles.cardInside} onPress={onPress.bind(this,produit)} >
            <Image style={styles.image} source = {{uri:produit.image}}/>
            <View style={styles.textcontaier}>
                <Text style={styles.title}>{produit.nomProduit}</Text>
                <Text style={styles.prix}>Vendu par: {produit.fournisseur}</Text> 
                <Text style={styles.prix}>{produit.prix} $</Text> 
            </View>
            
        </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:120,
        height:80,
        marginVertical:10,
        marginEnd:10,
    },
    textcontaier:{
        marginStart:10
    },
    card:{
        
        paddingHorizontal:40,
        marginVertical:10,
        height:130,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius:20,
        alignContent:'space-between',
        justifyContent:'center',
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        
    },
    
    cardInside:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        width:120,
        fontSize:16,
        color:MyColors.grey800,
        marginBottom:5,
    },
    prix:{
        fontSize:12,
        color: MyColors.grey700,
        marginVertical:4
    }

})