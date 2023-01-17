import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../constants/colors'
import ConnexionRegister from './ConnexionRegister'
import ConnexionLogin from './ConnexionLogin'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import DeleteProduct from './DeleteProduct'

export default function OutilsModal({modalVisible, dismissModal, render}) {
    
  return (
    <Modal visible={modalVisible}
    animationType='slide'>
        <View style={styles.container}>
        <Button title='Fermer' onPress={dismissModal} color='#060'/>
        {render ==='add'? <AddProduct/>: null}
        {render ==='modify'?<UpdateProduct/>: null}
        {render ==='remove'? <DeleteProduct/>: null}
        
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:MyColors.grey400,
        paddingTop:40
    }
})