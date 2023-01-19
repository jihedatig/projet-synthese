import { Alert, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import InputOutils from './InputOutils'
import MyColors from '../constants/colors'
import BtnForm from './BtnForm'
import axios from 'axios'
import { SelectList } from 'react-native-dropdown-select-list'
import ChatBtn from './ChatBtn'
import InputSearch from './InputSearch'

export default function UpdateProduct() {
    const[product, setProduct] = useState({
        idCategorie: "",
        details: "",
        fournisseur: "",
        idproduit: "",
        image: "",
        nomProduit: "",
        prix: 0.00,
      });
    const [recherche, setRecherche] = useState("");
    const [selected, setSelected] = useState("");
    const data = [
        {key:'1', value:'Portable'},
        {key:'2', value:'Tablette'},
        {key:'3', value:'Cellulaire'}
    ]
    function inputHandler(inputIdentifier, enteredValue){
        setProduct((currentValue) =>{
            return{
                ...currentValue,
                [inputIdentifier]: enteredValue
            };
        })
        console.log(product)
    }
    function rechercheHandler(rechercheValue){
        setRecherche(rechercheValue);
        console.log(recherche)
    }
    async function getProduct(){
        
        const endpoint = 'https://ggmarket.alwaysdata.net/getProduct/'+recherche;
        const response = await axios.get(endpoint)
        if (response.data.message === 'produit(s) trouvé(s)'){
            let unproduit = {
                
                    idCategorie: ""+response.data.data.idCategorie,
                    details: response.data.data.details,
                    fournisseur: response.data.data.fournisseur,
                    idproduit: ""+response.data.data.idproduit,
                    image: response.data.data.image,
                    nomProduit: response.data.data.nomProduit,
                    prix: ""+response.data.data.prix,
                  
            }
            setProduct(unproduit)
            
            console.log(unproduit)
        }else{
            Alert.alert(response.data.message)
        }
        
    }
    async function submitForm(){
        const newProduct = {
            image: product.image,
            nomproduit: product.nomProduit,
            details: product.details,
            prix: parseFloat(product.prix),
            fournisseur: product.fournisseur,
            idCategorie: parseInt(selected)
        }
        const endpoint = 'https://ggmarket.alwaysdata.net/updateProduct/'+product.idproduit;
        const response = await axios.put(endpoint, newProduct)
        Alert.alert(response.data.message)
        console.log(response.data)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Modifier un produit</Text>
        
        <InputSearch label={'Recherche : '} placeholder={'Cherchez par ID'} inputconfig={{onChangeText: rechercheHandler, value: recherche}} onPress={getProduct}/>
   
        
        <InputOutils label={'Image: '} placeholder={'Image path'} inputconfig={{onChangeText: inputHandler.bind(this, 'image'), value: product.image}}/>
        <InputOutils label={'Nom du produit: '} placeholder={'Nom produit'} inputconfig={{onChangeText: inputHandler.bind(this, 'nomproduit'), value: product.nomProduit}}/>
        <InputOutils label={'Details: '} placeholder={'details'} inputconfig={{onChangeText: inputHandler.bind(this, 'details'), value: product.details}}/>
        <InputOutils label={'prix: '} placeholder={'$'} inputconfig={{onChangeText: inputHandler.bind(this, 'prix'), value: product.prix}}/>
        <InputOutils label={'Fournisseur: '} placeholder={'fournisseur'} inputconfig={{onChangeText: inputHandler.bind(this, 'fournisseur'), value: product.fournisseur}}/>
        <View style={styles.categorie}>
            <Text style={styles.catlabel}>Categorie : </Text>
        <SelectList style={styles.catselect} boxStyles={styles.catselect} label="Categories" setSelected={setSelected} data={data}/>
        </View>
        
        <BtnForm text={"Modifier"} icon='done' onPress={submitForm}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:24,
        color:MyColors.grey800,
        marginVertical:20,
        textAlign:'center',
    },
    categorie:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'space-around',
        paddingHorizontal:30,
    },
    catlabel:{
        flex:1,
        fontSize:12
    },
    catselect:{
        width:210,
        backgroundColor:'#FFF'
    },
  
    
})