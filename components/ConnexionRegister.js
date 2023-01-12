import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Input from './Input'
import MyColors from '../constants/colors'
import BtnForm from './BtnForm'
import axios from 'axios'

export default function ConnexionRegister() {
    const[registerClient, setRegisterClient] = useState({
        username: '',
        password: '',
        nom: '',
        prenom: '',
        telephone: '',
        addresse: '',
        courriel: ''
    });
    function inputHandler(inputIdentifier, enteredValue){
        setRegisterClient((currentValue) =>{
            return{
                ...currentValue,
                [inputIdentifier]: enteredValue
            };
        })
        console.log(registerClient)
    }
    function submitForm(){
        const endpoint = 'https://ggmarket.alwaysdata.net/createClient';
        axios.post(endpoint, registerClient)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>S'inscrire</Text>
        <Input label={'contacts'} placeholder={'Username'} inputconfig={{onChangeText: inputHandler.bind(this, 'username'), value: registerClient.username}}/>
        <Input label={'lock'} placeholder={'Mot de passe'} securedField={true} inputconfig={{onChangeText: inputHandler.bind(this, 'password'), value: registerClient.password}}/>
        <Input label={'edit-attributes'} placeholder={'Nom'} inputconfig={{onChangeText: inputHandler.bind(this, 'nom'), value: registerClient.nom}}/>
        <Input label={'edit-attributes'} placeholder={'Prenom'} inputconfig={{onChangeText: inputHandler.bind(this, 'prenom'), value: registerClient.prenom}}/>
        <Input label={'call'} placeholder={'Telephone'} inputconfig={{onChangeText: inputHandler.bind(this, 'telephone'), value: registerClient.telephone}}/>
        <Input label={'location-pin'} placeholder={'Addresse'} inputconfig={{onChangeText: inputHandler.bind(this, 'addresse'), value: registerClient.addresse}}/>
        <Input label={'mail'} placeholder={'Courriel'} inputconfig={{onChangeText: inputHandler.bind(this, 'courriel'), value: registerClient.courriel}}/>
        <BtnForm text={"S'inscrire"} icon='done' onPress={submitForm}/>
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
    
})