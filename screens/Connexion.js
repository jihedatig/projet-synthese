import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Btn from '../components/Btn'
import MyColors from '../constants/colors'
import ConnexionModal from '../components/ConnexionModal';
import { useSelector, useDispatch } from 'react-redux';
import {affichageActions} from '../store/store'
import UserProfile from './UserProfile';
import VisitorPage from './VisitorPage';

export default function Connexion() {
    const isAuth = useSelector(state => state.connexion.isConnected);
   
  return (
    isAuth?<UserProfile/>:<VisitorPage/>
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