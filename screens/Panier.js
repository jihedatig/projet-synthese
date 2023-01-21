import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Quantity from '../components/Quantity'
import Product from '../components/Product'
import PanierBtn from '../components/PanierBtn'
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {panierActions} from '../store/store';
import ProductPanier from '../components/ProductPanier'
import MyColors from '../constants/colors'
import BtnSuppPanier from '../components/BtnSuppPanier'

export default function Panier() {
  const dispatch = useDispatch();
  let affichePanier = useSelector(state => state.panier);
  const screenpanier = useIsFocused();
  const[sstotale,setSStotale] = useState(0.00);
  const[tps, setTps] = useState(0.00);
  const[tvq, setTvq] = useState(0.00);
  const[grandTotal, setGrandTotal] = useState(0.00);
  var dateToday = new Date();
  var month = dateToday.getUTCMonth() + 1;
  var day = dateToday.getUTCDate();
  var year = dateToday.getUTCFullYear();
  var dateCommande = year + '-' + month + '-' + day;
  

  useEffect(()=>{
    
    testpanier();
    //sstotale = dispatch(panierActions.getSStotale())
  },[screenpanier]);
  useEffect(()=>{
     var solde =0
    if (affichePanier.length>0){
         for (var i=0;i<affichePanier.length;i++){
          solde += (affichePanier[i].prix * affichePanier[i].qty)
          
          } 
          var newtps = parseFloat((solde * 0.05).toFixed(2));
            var newtvq = parseFloat((solde * 0.09975).toFixed(2));
          setSStotale(solde);
          setTps(newtps) ;
          setTvq(newtvq);
          var newgrandTotal = solde + newtps + newtvq
          setGrandTotal(parseFloat(newgrandTotal.toFixed(2)))
          console.log("sous total changed: " + sstotale)
          console.log('from panier :'+ JSON.stringify(affichePanier))
      }
  },[affichePanier,affichePanier.length]);

  async function testpanier(){
    const dummy = {
      nomProduit: 'whatever',
      prix: 550
    }
    const response = await axios.post('https://ggmarket.alwaysdata.net/testpanier/999', dummy)
  }


function viewProductHandler(){

}

  return (

      <View style={styles.header} >
        {affichePanier.length>0?
        <>
        <View style={styles.cartheader}>
          <View style={styles.leftHcart}>
            <MaterialIcon name="shopping-cart" color={MyColors.orange} size={30} />
          </View>
          <View style={styles.centerHcart}>
            <Text style={styles.ctText}>Sous-totale: {sstotale} $</Text>
            <Text style={styles.ctText}>TPS: {tps}$</Text>
            <Text style={styles.ctText}>TVQ: {tvq}$</Text>
          </View>
          <View style={styles.rightHcart}>
            <Text style={styles.ctText}>Grand totale:</Text>
            <Text style={styles.ctText}>{grandTotal}$</Text>
            <BtnSuppPanier text={'Payez'} icon='navigate-next' color={MyColors.orange} tcolor='#FFF' />
          </View>
          
        </View>
      
      
      <FlatList style={styles.rv} key={'P'}  contentContainerStyle={{alignItems:'center',width:'100%',paddingBottom:64}}  data={affichePanier} renderItem={(itemData) => <ProductPanier produit={itemData.item} onPress={viewProductHandler}/>} numColumns={1} keyExtractor={(item, index) =>{return 'P'+item.idproduit+index;}} />
      </>
      :<Text style={styles.titre}>Aucun element dans le panier</Text>}
      </View>

      

  )
}

const styles = StyleSheet.create({

  titre:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
},
header:{
  flex:1,
  paddingTop:5,
  paddingBottom:10,
  justifyContent:'center',
  alignItems:'center'
},
rv:{
  flex:1,
  
 
},
cartheader:{
  flexDirection:'row',
  justifyContent:'space-between',
  height:90,
  width:'100%',
  paddingVertical:10,
  paddingHorizontal:15,
},
leftHcart:{
  width:60,
},
centerHcart:{

},
rightHcart:{

},
ctText:{
  fontSize:12,
  color:MyColors.grey800,
  marginBottom:4,
  textAlign:'center'
},
})