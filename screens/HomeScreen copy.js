import { StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput } from 'react-native'
import {React, useState, useEffect} from 'react'
import MyColors from '../constants/colors'
import Product from '../components/Product'
// import Produits from '../constants/DummyBDtest'
import ProductModal from '../components/ProductModal'
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList'
import {affichageActions} from '../store/store'
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'
import InputSearch from '../components/InputSearch'




export default function HomeScreen() {
    const [currentPage, setCurrentPage] = useState(1);
    
    const [searchPage, setSearchPage] = useState(1);
    const [searchMode, setSearchMode] = useState(false);
    const [recherche, setRecherche] = useState("");
    const [Produits, setProduits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const affichage = useSelector(state => state.affichage.affichage);

    const isFocused = useIsFocused();
    useEffect(()=>{
        isFocused? dispatch(affichageActions.toggleOptions(true)):dispatch(affichageActions.toggleOptions(false));
    },[isFocused])


    async function fetchProducts(){
        setIsLoading(true);
        const onlineProducts = await axios.get(`https://ggmarket.alwaysdata.net/getPageProducts/${currentPage}`);
     
        setProduits([...Produits,...onlineProducts.data]);
        console.log('fetching all products...')
        setIsLoading(false);
    }
    function rechercher(e){
        setRecherche(e);
        
        
    }
    async function fetchSearch(){
        
        if (recherche.length !== 0){
            setIsLoading(true);
            const onlineProductss = await axios.get(`https://ggmarket.alwaysdata.net/findProducts/${searchPage}/${recherche}`);
            console.log(onlineProductss.data);
            setProduits(onlineProductss.data);
            setIsLoading(false);
        }
        
    }
    
    useEffect(()=>{
        
        if (recherche.length === 0){
            fetchProducts();
            console.log("search empty");
        }else{
            fetchSearch();
            console.log("searching");
            
            
        }
        
    },[currentPage]);

    useEffect(()=>{
        setProduits([]);
        if (recherche.length === 0){
            
            setSearchMode(false);
            fetchProducts();
            console.log("search empty");
        }
        },[recherche]);
  

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
    function loadMoreItems(){
        if(currentPage<8 || searchPage<8){
            if (searchMode){
                setSearchPage (searchPage + 1)
            }else{
                setCurrentPage(currentPage + 1);
            }
            
        console.log('load more...'); 
        }
        
    }
        function resetpage(){
        console.log('Search mode...' + searchPage + " " + recherche);
        setSearchMode(true);
        setSearchPage(1);
        setCurrentPage(1);
        const newProducts = [];
        setProduits(newProducts);
        if (recherche.length === 0){
           fetchProducts() 
        }else{
            const myTimeout = setTimeout(fetchSearch, 800);
        }
        
        
        
        
    }
    function RenderLoad() {
        return (
          isLoading?  
          <View style={styles.loaderStyle}>
            <ActivityIndicator size='large' color='#000'/>
          </View> : null
        )
      }
  return (
    <>
    <ProductModal modalVisible={modalVisible} dismissModal={dismissProductHandler} product={procuctView}/>
    <View style={styles.screenBg}>
    
    <View style={styles.pageContainer}>
        {/* <View><TextInput style={styles.input} placeholder='Recherche' autoCapitalize='none' onChangeText={rechercher} value={recherche} onFocus={resetpage}/></View> */}
        <InputSearch style={{flex:1}} label={'Recherche : '} placeholder={'Recherche'} inputconfig={{onChangeText:rechercher, value: recherche}} onPress={resetpage}/>
       { affichage ?
    <FlatList key={'L'}  contentContainerStyle={{justifyContent:'center',width:'100%'}} style={styles.productsList} data={Produits} renderItem={(itemData) => <ProductList produit={itemData.item} onPress={viewProductHandler}/>} numColumns={1} keyExtractor={(item, index) =>{return 'L'+item.idproduit+index;}} ListFooterComponent={RenderLoad} onEndReached={loadMoreItems} onEndReachedThreshold={0}/>
            :
    <FlatList key={'G'}  contentContainerStyle={{justifyContent:'center', alignItems:'center',}} style={styles.productsList} data={Produits} renderItem={(itemData) => <Product produit={itemData.item} onPress={viewProductHandler}/>} numColumns={2} keyExtractor={(item, index) =>{return 'G'+item.idproduit+index;}} ListFooterComponent={RenderLoad} onEndReached={loadMoreItems} onEndReachedThreshold={0}/>
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

    },
    loaderStyle:{
        marginVertical:16,
        alignItems:'center'
    },
    input:{
        width:'75%',
        borderRadius:10,
        borderColor:MyColors.grey800,
        borderWidth:1,
        backgroundColor:'#FFF',
        color:MyColors.grey800,
        overflow:'hidden',
        padding:5,

    },
})
