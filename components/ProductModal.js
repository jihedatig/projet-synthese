import { StyleSheet, Text, View, Image, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function ProductModal({modalVisible, dismissModal, product}) {
  const [evaluation, setEvaluation] = useState(2);
 
  return (
    <Modal 
    visible={modalVisible}
    animationType='slide'>
    <View style={styles.productModal}>
      <Button title='Fermer' onPress={dismissModal} color='#060'/>
      <Image style={styles.image} source={product.image}/>
      <View style={styles.productDetailsContainer}>
        <Text style={styles.titre}>{product.nomProduit}</Text>
        <View style={styles.eval}>
          {[...Array(evaluation)].map((star) =>(<MaterialIcon name="star" color={MyColors.orange} size={16}/>))}
          {[...Array(5-evaluation)].map((star) =>(<MaterialIcon name="star" color={MyColors.orange200} size={16}/>))}
        </View>
        <Text>{product.prix} $</Text>
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
  },
  titre:{
    fontSize:24,
    color: MyColors.grey800,
    marginVertical:16,
  },
  eval:{
    flexDirection:'row',
  }
})