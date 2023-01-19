import { StyleSheet, Text, View, Image, Modal, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../constants/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Quantity from './Quantity';
import Btn from './Btn';

export default function ProductModal({modalVisible, dismissModal, product}) {
  const [evaluation, setEvaluation] = useState(2);
  function confirmDialogue(){
    Alert.alert('Produit: '+ product.nomProduit +' ajouté au panier')
  }
 
  return (
    <Modal 
    visible={modalVisible}
    animationType='slide'>
    <View style={styles.productModal}>
      <Button title='Fermer' onPress={dismissModal} color='#060'/>
      <Image  source = {{uri:product.image}} style = {{ width: 350, height: 250 }}/>
      <View style={styles.spacer}>
        <View style={styles.productDetailsContainer}>
          <Text style={styles.titre}>{product.nomProduit}</Text>
          <View style={styles.topcontainer}>
          <View style={styles.topcontainer}>
            <View>
                <View style={styles.eval}>
                {[...Array(evaluation)].map((star,index) =>(<MaterialIcon key={'A'+index} name="star" color={MyColors.orange} size={16}/>))}
                {[...Array(5-evaluation)].map((star,index) =>(<MaterialIcon key={'I'+index} name="star" color={MyColors.orange200} size={16}/>))}
              </View>
              <Text>{product.prix} $</Text>
            </View>
            
          <Quantity/>
          </View>
          
          
          </View>
          <Text style={styles.details}>{product.details}</Text>
          <View style={styles.btnContainer}>
        <Btn text={'Ajouter au panier'} icon='shopping-cart' color={MyColors.orange} tcolor='#FFF' onPress={confirmDialogue}/>
        <Btn text={'Ajouter au favorie'} icon='favorite' color={MyColors.grey650} tcolor='#FFF' onPress={confirmDialogue}/>
      </View>
        </View>
      
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
    alignItems:'center',
    justifyContent:'flex-start'
    
  },
  titre:{
    fontSize:24,
    color: MyColors.grey800,
    marginVertical:16,
  },
  eval:{
    flexDirection:'row',
  },
  topcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  spacer:{
    flex:1,
    alignContent:'space-between',
    justifyContent:'center',
    paddingBottom:10,
    backgroundColor:'#FFF',
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    overflow:'hidden'
    
  },
  btnContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  details:{
    marginTop:20,
    fontSize:16
  }
})