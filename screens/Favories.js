import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import ProductModal from '../components/ProductModal'

export default function Favories() {
    
    const isFocused = useIsFocused();
    const [produits, setProduits] = useState([])
    const[procuctView, setProductView] = useState({});
    const userId = useSelector(state => state.connexion.userId);
    console.log(userId);


    const[modalVisible, setModalVisible]=useState(false);
    
    function viewProductHandler(produit){
        
        setProductView({...produit});
            setModalVisible(true);
            console.log(procuctView);
    }
    function dismissProductHandler(){
        setModalVisible(false)
    }

    useEffect(()=>{
        fetchFavories()
            
        
    },[isFocused]);
    async function fetchFavories(){
        const onlineFavorie = await axios.get('https://ggmarket.alwaysdata.net/getFavories/2');
        setProduits(onlineFavorie.data.data);
        console.log(onlineFavorie.data.data);
    }
    function viewProductHandler(produit){
        
        setProductView({...produit});
            setModalVisible(true);
            console.log(procuctView);
    }
        
    // DELETE FROM `listeSouhaits` WHERE idUtilisateur = 2 AND idproduit = 38; 
  return (
    <>
    <View>
        
    <ProductModal modalVisible={modalVisible} dismissModal={dismissProductHandler} product={procuctView}/>
      <FlatList key={'F'}  contentContainerStyle={{justifyContent:'center',width:'100%'}} style={styles.productsList} data={produits} renderItem={(itemData) => <ProductList produit={itemData.item} onPress={viewProductHandler}/>} numColumns={1} keyExtractor={(item, index) =>{return 'F'+item.idproduit+index;}} />
      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    productsList:{
        
    },
})