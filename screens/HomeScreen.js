import { StyleSheet, Text, View, FlatList } from 'react-native'
import {React, useState, useEffect} from 'react'
import MyColors from '../constants/colors'
import Product from '../components/Product'
import Produits from '../constants/DummyBDtest'
import ProductModal from '../components/ProductModal'
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList'
import {affichageActions} from '../store/store'



export default function HomeScreen() {

    const affichage = useSelector(state => state.affichage);
    

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
        { affichage ?
    <FlatList key={'L'} contentContainerStyle={{justifyContent:'center',width:'105%'}} style={styles.productsList} data={Produits} renderItem={(itemData) => <ProductList nomProduit={itemData.item.nomProduit} prix={itemData.item.prix} image={itemData.item.image} details={itemData.item.details} onPress={viewProductHandler}/>} numColumns={1} keyExtractor={(item, index) =>{return 'L'+item.idproduit;}}/>
            :
    <FlatList key={'G'} contentContainerStyle={{justifyContent:'center', alignItems:'center',}} style={styles.productsList} data={Produits} renderItem={(itemData) => <Product nomProduit={itemData.item.nomProduit} prix={itemData.item.prix} image={itemData.item.image} details={itemData.item.details} onPress={viewProductHandler}/>} numColumns={2} keyExtractor={(item, index) =>{return 'G'+item.idproduit;}}/>
        }
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
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:70,
    },
    productsList:{
        flex:1,
        width:'100%',

    }
})
