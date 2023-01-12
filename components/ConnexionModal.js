import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import MyColors from '../constants/colors'
import ConnexionRegister from './ConnexionRegister'
import ConnexionLogin from './ConnexionLogin'

export default function ConnexionModal({modalVisible, dismissModal, render}) {
    
  return (
    <Modal visible={modalVisible}
    animationType='slide'>
        <View style={styles.container}>
        <Button title='Fermer' onPress={dismissModal} color='#060'/>
        {render? <ConnexionLogin/> :<ConnexionRegister/> }
        
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:MyColors.orange200,
        paddingTop:40
    }
})