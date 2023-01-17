import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import InputOutils from './InputOutils'
import MyColors from '../constants/colors'
import BtnForm from './BtnForm'
import axios from 'axios'
import { SelectList } from 'react-native-dropdown-select-list'

export default function AddProduct() {
    const[product, setProduct] = useState({
        image: '',
        nomproduit: '',
        details: '',
        prix: '',
        fournisseur: '',
        idCategorie: ''
    });
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
    async function submitForm(){
        const newProduct = {
            image: 'require("../assets/'+product.image+'")',
            nomproduit: product.nomproduit,
            details: product.details,
            prix: parseFloat(product.prix),
            fournisseur: product.fournisseur,
            idCategorie: parseInt(selected)
        }
        const endpoint = 'https://ggmarket.alwaysdata.net/createProduct';
        const response = await axios.post(endpoint, newProduct)
        console.log(response.data)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Ajouter un produit</Text>
        <InputOutils label={'Image: '} placeholder={'Image path'} inputconfig={{onChangeText: inputHandler.bind(this, 'image'), value: product.image}}/>
        <InputOutils label={'Nom du produit: '} placeholder={'Nom produit'} inputconfig={{onChangeText: inputHandler.bind(this, 'nomproduit'), value: product.nomproduit}}/>
        <InputOutils label={'Details: '} placeholder={'details'} inputconfig={{onChangeText: inputHandler.bind(this, 'details'), value: product.details}}/>
        <InputOutils label={'prix: '} placeholder={'$'} inputconfig={{onChangeText: inputHandler.bind(this, 'prix'), value: product.prix}}/>
        <InputOutils label={'Fournisseur: '} placeholder={'fournisseur'} inputconfig={{onChangeText: inputHandler.bind(this, 'fournisseur'), value: product.fournisseur}}/>
        <View style={styles.categorie}>
            <Text style={styles.catlabel}>Categorie : </Text>
        <SelectList style={styles.catselect} boxStyles={styles.catselect} label="Categories" setSelected={setSelected} data={data}/>
        </View>
        
        <BtnForm text={"Ajouter"} icon='done' onPress={submitForm}/>
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
    }
    
})