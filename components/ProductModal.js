import { StyleSheet, Text, View, Image, Modal, Button } from 'react-native'
import React from 'react'

export default function ProductModal({modalVisible, dismissModal, product}) {
  return (
    <Modal 
    visible={modalVisible}
    animationType='slide'>
    <View style={styles.productModal}>
      <Button title='Fermer' onPress={dismissModal} color='#060'/>
      <Image style={styles.image} source={product.image}/>
      <View style={styles.productDetailsContainer}>
        <Text>{product.nomProduit}</Text>
        <Text>{product.prix}</Text>
        <Text>{product.details}</Text>
      </View>

    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  image:{
    maxWidth:350,
    maxHeight:250
  },
  productModal:{
    flex:1,
    paddingTop:40,
    backgroundColor:'#ccc'
  },
  productDetailsContainer:{
    flex:1,
    marginTop:20,
    padding:10,
    backgroundColor:'#FFF',
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    overflow:'hidden'
  }
})