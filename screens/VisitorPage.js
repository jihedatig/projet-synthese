import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Btn from '../components/Btn'
import MyColors from '../constants/colors'
import ConnexionModal from '../components/ConnexionModal';
import { useSelector, useDispatch } from 'react-redux';
import {affichageActions} from '../store/store'

export default function VisitorPage() {
    

    const[modalVisible, setModalVisible]=useState(false);
    const[compRender, setCompRender]=useState(false);
    
    function dismissProductHandler(){
        setModalVisible(false)
    }
    function connectHandler(comp){
        
            if(comp === 'connect'){
                setCompRender (true)
            }
            if(comp === 'register'){
                setCompRender (false)
            }
            setModalVisible(true);
    }
  return (
    <>
    <ConnexionModal modalVisible={modalVisible} dismissModal={dismissProductHandler} render ={compRender}/>
    <View style={styles.screenBg}>
    <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
      <Btn text={'Se connecter'} icon='person' color={MyColors.grey800} tcolor={MyColors.grey400} onPress={connectHandler.bind(this,'connect')}/>
      <Btn text={"S'inscrire"} icon='edit' color={MyColors.grey800} tcolor={MyColors.grey400} onPress={connectHandler.bind(this,'register')}/>
      <Btn text={"Mot de passe oublié"} icon='vpn-key' color={MyColors.grey800} tcolor={MyColors.grey400} onPress={connectHandler}/>
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
    container:{
        flex:1,
        paddingTop:15,
        backgroundColor:MyColors.grey400,
        alignItems:'center',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        overflow:'hidden',
    },
    title:{
        fontSize:24,
        color:MyColors.grey800,
        marginBottom:20,
    }

})