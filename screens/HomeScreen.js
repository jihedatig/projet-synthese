import { StyleSheet, Text, View, FlatList } from 'react-native'
import {React, useState} from 'react'
import MyColors from '../constants/colors'
import Product from '../components/Product'
import Produits from '../constants/DummyBDtest'
import ProductModal from '../components/ProductModal'

export default function HomeScreen() {
    const[modalVisible, setModalVisible]=useState(false);
    const[procuctView, setProductView] = useState({
        nomProduit:'',
        prix:'',
        image:'',
        details:''
    });
    function viewProductHandler(nomProduit, prix, image, details){
        
        setProductView({nomProduit:nomProduit, prix:prix, image:image, details:details});
            setModalVisible(true);
            console.log(procuctView);
    }
   
    function dismissProductHandler(){
        setModalVisible(false)
    }
  return (
    <>
    <ProductModal modalVisible={modalVisible} dismissModal={dismissProductHandler} product={procuctView}/>
    <View style={styles.screenBg}>
    <View style={styles.pageContainer}>
    <FlatList data={Produits} renderItem={(itemData) => <Product nomProduit={itemData.item.nomProduit} prix={itemData.item.prix} image={itemData.item.image} details={itemData.item.details} onPress={viewProductHandler}/>} numColumns={2}/>
      
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    screenBg:{
        flex:1,
        backgroundColor: "#474747"
    },
    pageContainer:{
        flex:1,
        backgroundColor: MyColors.grey400,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        padding:10,
        overflow:'hidden',
    }
})
