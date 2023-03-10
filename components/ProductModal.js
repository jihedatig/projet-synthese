import { StyleSheet, Text, View, Image, Modal, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Quantity from './Quantity';
import Btn from './Btn';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import {panierActions} from '../store/store';

export default function ProductModal({modalVisible, dismissModal, product}) {
  const [evaluation, setEvaluation] = useState(2);
  const [favorie, setFavorie] = useState(false);
  const isFocused = useIsFocused();
  const isConnected = useSelector(state => state.connexion.isConnected);
  const userId = useSelector(state => state.connexion.userId);
  const dispatch = useDispatch();
  const [quantity,setQuantity]= useState(1);
  const [inFocusProduct, setInFocusProduct]= useState(
    {
      idproduit: product.idproduit,
      nomProduit: product.nomProduit,
      prix: product.prix,
      fournisseur: product.fournisseur,
      idCategorie: product.idCategorie,
      details: product.details, 
      image: product.image,
      qty: 1
    }
  )
  useEffect(()=>{
    setInFocusProduct(
      {
        idproduit: product.idproduit,
        nomProduit: product.nomProduit,
        prix: product.prix,
        fournisseur: product.fournisseur,
        idCategorie: product.idCategorie,
        details: product.details, 
        image: product.image,
        qty: 1
      }
    );

    console.log('from useeffect : '+inFocusProduct);
  },[product])
  

  useEffect(()=>{
    setQuantity(inFocusProduct.qty);

    console.log('from useeffect : '+inFocusProduct);
  },[inFocusProduct])
  
  
  
  
  function decreaseQty(){
    if (inFocusProduct.qty>1){
     
      let currentQt = inFocusProduct;
    currentQt.qty--;
      
      setInFocusProduct( currentQt );
      setQuantity(inFocusProduct.qty);
      console.log(inFocusProduct);
    }
    
  }
  function incrementQty(){
    
    let currentQt = inFocusProduct;
    currentQt.qty++;
    
    setInFocusProduct(currentQt );
    setQuantity(inFocusProduct.qty);
    console.log(inFocusProduct);
  }



  useEffect(()=>{
    checkFavorite();
    
  },[isFocused, product]);
  async function checkFavorite(){
    console.log('product modal' + isFocused)
    if(isFocused && userId !==0 && typeof(product.idproduit) != "undefined"){
     const response = await axios.get(`https://ggmarket.alwaysdata.net/istFavorie/${product.idproduit}/${userId}`);
      console.log(response.data) 
      if(response.data.message === "favorie trouv??"){
        setFavorie(true);
      }else{
        setFavorie(false);
      }
    }else{
      console.log('not connected')
    }
    
  }
  async function ajouterFavorie(){
    if (isConnected && userId !==0 ){
      const endpoint = 'https://ggmarket.alwaysdata.net/addFavorite';
      const favPayload = {idproduit: product.idproduit, idClient: userId}
      const response = await axios.post(endpoint, favPayload)
      console.log(response.data)
      setFavorie(true);
      Alert.alert(`- ${product.nomProduit} - ajout?? au favorie!`)
    }else{
      Alert.alert('Veuillez vous connecter')
    }
   

  }
  async function deleteFavorie(){
    const response = await axios.delete(`https://ggmarket.alwaysdata.net/deleteFavorie/${product.idproduit}/${userId}`);
    console.log(response.data.message);
    setFavorie(false);

  }
  function ajouterPanier(){
    dispatch(panierActions.addToCart(inFocusProduct))
    Alert.alert('Produit: '+ inFocusProduct.nomProduit +' ajout?? au panier')
  }
 
  return (
    <Modal 
    visible={modalVisible}
    animationType='slide'>
    <View style={styles.productModal}>
      <Button title='Fermer' onPress={dismissModal} color='#060'/>
      <Image  source = {{uri:product.image}} style = {{ width: 350, height: 250 }}/>
      <View style={styles.spacer}>
        <View style={styles.productDetailsContainer}>
          <Text style={styles.titre}>{product.nomProduit}</Text>
          <View style={styles.topcontainer}>
          <View style={styles.topcontainer}>
            <View>
                <View style={styles.eval}>
                {[...Array(evaluation)].map((star,index) =>(<MaterialIcon key={'A'+index} name="star" color={MyColors.orange} size={16}/>))}
                {[...Array(5-evaluation)].map((star,index) =>(<MaterialIcon key={'I'+index} name="star" color={MyColors.orange200} size={16}/>))}
              </View>
              <Text>{product.prix} $</Text>
            </View>
            
          <Quantity inc={incrementQty} dec={decreaseQty} qty={quantity}/>
          </View>
          
          
          </View>
          <Text style={styles.details}>{product.details}</Text>
          <View style={styles.btnContainer}>
        <Btn text={'Ajouter au panier'} icon='shopping-cart' color={MyColors.orange} tcolor='#FFF' onPress={ajouterPanier}/>
        {favorie?<Btn text={'Retirer de favorie'} icon='favorite' color={MyColors.red600} tcolor='#FFF' onPress={deleteFavorie}/>:<Btn text={'Ajouter au favorie'} icon='favorite' color={MyColors.grey650} tcolor='#FFF' onPress={ajouterFavorie}/>}
      </View>
        </View>
      
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  image:{
    maxWidth:350,
    maxHeight:250
  },
  productModal:{
    flex:1,
    paddingTop:40,
    backgroundColor:'#ccc',
    alignItems:'center'
  },
  productDetailsContainer:{
    flex:1,
    width:'100%',
    marginTop:20,
    padding:10,
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'flex-start'
    
  },
  titre:{
    fontSize:24,
    color: MyColors.grey800,
    marginVertical:16,
  },
  eval:{
    flexDirection:'row',
  },
  topcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  spacer:{
    flex:1,
    alignContent:'space-between',
    justifyContent:'center',
    paddingBottom:10,
    backgroundColor:'#FFF',
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    overflow:'hidden'
    
  },
  btnContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  details:{
    marginTop:20,
    fontSize:16
  }
})