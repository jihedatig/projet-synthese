import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Quantity from './Quantity'
import MyColors from '../constants/colors'
import BtnSuppPanier from './BtnSuppPanier'
import { useDispatch } from 'react-redux'
import {panierActions} from '../store/store';

export default function ProductPanier({produit}) {
    const dispatch = useDispatch();

    function decreaseQty(){
        if (produit.qty>1){
            dispatch(panierActions.decreaseQty(produit.idproduit))
          
        }
        
      }
      function incrementQty(){
        
        dispatch(panierActions.incrementQty(produit.idproduit))
      }
      function removeProduit(){
        dispatch(panierActions.removeProduct(produit.idproduit))
        
      }

  return (
    <View style={styles.card}>
        <View style={styles.leftContainer}>
            <Image  source = {{uri:produit.image}} style = {styles.img}/>
            <Quantity inc={incrementQty} dec={decreaseQty} qty={produit.qty}/>
        </View>
        <View style={styles.rightContainer}>
            <Text style={styles.title}>{produit.nomProduit}</Text>
            <Text style={styles.prix}>{produit.prix} $</Text>
            <Text >Vendu par : {produit.fournisseur}</Text>
            <Text style={styles.sstotale}>sous-totale: {produit.prix * produit.qty}</Text>
            <BtnSuppPanier text={'Supprimer'} icon='delete-forever' color={MyColors.red600} tcolor='#FFF' onPress={removeProduit}/>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        paddingVertical:20,
        paddingHorizontal:30,
        backgroundColor:'#FFF',
        borderRadius:10,
        marginVertical:10,
        flexDirection:'row',
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
    },
    leftContainer:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    rightContainer:{
        paddingHorizontal:5,
        marginStart:20,
        justifyContent:'space-between',
    },
    img:{
        width: 120, 
        height: 70,
        marginBottom:10
    },
    title:{
        width:120,
        fontSize:16,
        color:MyColors.grey700
    },
    prix:{
        marginVertical:10,
        fontWeight:'bold'
    },
    sstotale:{
        fontSize:12,
        marginVertical:10,
        color:MyColors.grey700,
    }
})