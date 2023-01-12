import { Alert, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Input from './Input'
import MyColors from '../constants/colors'
import BtnForm from './BtnForm'
import axios from 'axios'

export default function ConnexionLogin() {
    const[connectClient, setConnectClient] = useState({
        username: '',
        password: ''
    });
    function inputHandler(inputIdentifier, enteredValue){
        setConnectClient((currentValue) =>{
            return{
                ...currentValue,
                [inputIdentifier]: enteredValue
            };
        })
        console.log(connectClient)
    }
    async function submitForm(){
        const endpoint = 'https://ggmarket.alwaysdata.net/login';
       const response = await axios.post(endpoint, connectClient);

       Alert.alert(response.data.message);
       console.log(response.data.message)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <Input label={'contacts'} placeholder={'Username'} inputconfig={{onChangeText: inputHandler.bind(this, 'username'), value: connectClient.username}}/>
        <Input label={'lock'} placeholder={'Mot de passe'} securedField={true} inputconfig={{onChangeText: inputHandler.bind(this, 'password'), value: connectClient.password}}/>
        <BtnForm text={"Se connecter"} icon='done' onPress={submitForm}/>
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