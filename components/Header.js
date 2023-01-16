import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import MyColors from '../constants/colors';
import IconBtn from './IconBtn';
import ImgPath from '../constants/ImgPath';
import { useSelector, useDispatch, connect } from 'react-redux';
import {affichageActions} from '../store/store'
import {connectActions} from '../store/store'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function Header(props) {
  const dispatch = useDispatch();
  

  const affichage = useSelector((state) => state.affichage.affichage);
  
  function changeAffichage(){
    dispatch(affichageActions.toggleAffichage())
  }
  function logout(){
    dispatch(connectActions.logout())
  }
  return (
    <View style={styles.header}>
              
              <Image style={styles.image} source={require("../assets/GGLogo.png")} />
              <View style={styles.headerIconsContainer}>
                 {props.showOptions? <Pressable onPress={changeAffichage}>
                  <IconBtn>{affichage? ImgPath.gridView : ImgPath.listView }</IconBtn>
                </Pressable> : null}
                {props.showLogout?
                <Pressable onPress={logout}>
                <MaterialIcon name="logout" color={MyColors.orange} size={30}/>
                </Pressable>
                : null}
                
              </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height: 120,
        justifyContent:'space-between', 
        flexDirection:'row',
        paddingTop:30, 
        backgroundColor: MyColors.grey800,
    },
    image:{
        width: 60, 
        height: 50,
        margin:20
    },
    headerIconsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly', 
        alignContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingEnd:10
        
    },
    icons:{
        width: 30, 
        height: 30,
        margin:10
    }
})
function mapStateToProps (state){
  return{
    showOptions : state.affichage.showOptions,
    showLogout : state.connexion.isConnected
  }
}
export default connect(mapStateToProps)(Header);