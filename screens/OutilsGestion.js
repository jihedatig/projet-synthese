import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BtnOutils from '../components/BtnOutils'
import ImgPath from '../constants/ImgPath'
import MyColors from '../constants/colors'
import OutilsModal from '../components/OutilsModal'

export default function OutilsGestion() {
 
    const[modalVisible, setModalVisible]=useState(false);

    const[compRender, setCompRender]=useState('');

    function dismissProductHandler(){
        setModalVisible(false)
    }

    function connectHandler(comp){
        
        setCompRender (comp);
        setModalVisible(true);
}

  return (
    <>
    <OutilsModal modalVisible={modalVisible} dismissModal={dismissProductHandler} render ={compRender}/>
    
    <View style={styles.container}>
      <BtnOutils text='Ajouter Produit' icon={ImgPath.addProduct} color={MyColors.grey600} onPress={connectHandler.bind(this,'add')}/>
      <BtnOutils text='Modifier Produit' icon={ImgPath.updateProduct} color={MyColors.grey600} onPress={connectHandler.bind(this,'modify')}/>
      <BtnOutils text='Supprimer Produit' icon={ImgPath.deleteProduct} color={MyColors.grey600} onPress={connectHandler.bind(this,'remove')}/>

    
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        paddingHorizontal:20
    }
})