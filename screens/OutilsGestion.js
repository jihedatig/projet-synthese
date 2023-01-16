import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BtnOutils from '../components/BtnOutils'
import ImgPath from '../constants/ImgPath'
import MyColors from '../constants/colors'

export default function OutilsGestion() {
  return (
    <View style={styles.container}>
      <BtnOutils text='Ajouter Produit' icon={ImgPath.addProduct} color={MyColors.grey600}/>
      <BtnOutils text='Modifier Produit' icon={ImgPath.updateProduct} color={MyColors.grey600}/>
      <BtnOutils text='Supprimer Produit' icon={ImgPath.deleteProduct} color={MyColors.grey600}/>

      {/* text, icon, onPress, color, tcolor */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        paddingHorizontal:20
    }
})