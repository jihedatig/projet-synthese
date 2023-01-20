import { StyleSheet, Text, View, Image, Modal, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Quantity from './Quantity';
import Btn from './Btn';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';

export default function ProductModal({modalVisible, dismissModal, product}) {
  const [evaluation, setEvaluation] = useState(2);
  const [favorie, setFavorie] = useState(false);
  const isFocused = useIsFocused();
  const isConnected = useSelector(state => state.connexion.isConnected);
  const userId = useSelector(state => state.connexion.userId);
  function confirmDialogue(){
    Alert.alert('Produit: '+ product.nomProduit +' ajouté au panier')
  }
  useEffect(()=>{
    checkFavorite();
    
  },[isFocused, product]);
  async function checkFavorite(){
    console.log('product modal' + isFocused)
    if(isFocused && userId !==0 && typeof(product.idproduit) != "undefined"){
     const response = await axios.get(`https://ggmarket.alwaysdata.net/istFavorie/${product.idproduit}/${userId}`);
      console.log(response.data) 
      if(response.data.message === "favorie trouvé"){
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
      Alert.alert(`- ${product.nomProduit} - ajouté au favorie!`)
    }else{
      Alert.alert('Veuillez vous connecter')
    }
   

  }
  async function deleteFavorie(){
    const response = await axios.delete(`https://ggmarket.alwaysdata.net/deleteFavorie/${product.idproduit}/${userId}`);
    console.log(response.data.message);
    setFavorie(false);

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
            
          <Quantity/>
          </View>
          
          
          </View>
          <Text style={styles.details}>{product.details}</Text>
          <View style={styles.btnContainer}>
        <Btn text={'Ajouter au panier'} icon='shopping-cart' color={MyColors.orange} tcolor='#FFF' onPress={confirmDialogue}/>
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
    backgroundColor:'#ccc'
  },
  productDetailsContainer:{
    flex:1,
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