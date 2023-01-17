import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Quantity from '../components/Quantity'
import Product from '../components/Product'
import PanierBtn from '../components/PanierBtn'

export default function Panier() {


  function viewProductHandler(nomProduit, prix, image, details){
        
    setProductView({nomProduit:nomProduit, prix:prix, image:image, details:details});
        setModalVisible(true);
        console.log(procuctView);
}

  const produit =  {
    idproduit: 1,
    image: require("../assets/produit.png"),
    nomProduit: 'Portable HP',
    details: 'example de details',
    prix: 500.99,
    fournisseur: 'HP',
    idSousCategorie: 1,
}

  return (

    <View>

      <View style={styles.header} >
      <Text style={styles.titre}>Panier d'achat</Text>
      </View>

      <View style={styles.sousTitreRow}   >

      <Text style={styles.titre}>Produit</Text>
      <Text style={styles.titre}>Prix unitaire</Text>
      <Text style={styles.titre}>Total</Text>

      </View>


      <View style={styles.produitsRow}  >


        <Product nomProduit={produit.nomProduit} image={produit.image} onPress={viewProductHandler.bind(produit)}/>
      

        <Text style={styles.titre}>300$</Text>
        <Text style={styles.titre}>Total</Text>
     

      </View>

      <View style={styles.produitsRow}  >
      <Quantity/>
      <PanierBtn icon='delete' text={'Supprimer'}  />
      <PanierBtn  text={'Ajouter au favories'}  />
  

      </View  >
      

      <View style={styles.produitsRow}  >

      <PanierBtn  text={'passer commande'}  />

      <View style={styles.produitsColum}  >

      <Text style={styles.titre}>TPS: 00$</Text>
      <Text style={styles.titre}>TVQ: 00$</Text>
      <Text style={styles.titre}>Grand total: 00$</Text>

      </View>

      </View>


    </View>


  )
}

const styles = StyleSheet.create({

  titre:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
},
header:{
  paddingTop:5,
  paddingBottom:10,
  borderBottomColor:'#cccccc',
  borderBottomWidth: 2,
  justifyContent:'center',
  alignItems:'center'
},
sousTitreRow:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop:10,
  padding:5,
  borderBottomColor:'#cccccc',
  borderBottomWidth: 3
},

produitsRow:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop:10,
  padding:5,
  borderBottomColor:'#cccccc',
  borderBottomWidth: 3
},
produitsColum:{
  flexDirection: 'colum',
  justifyContent: 'space-between',
  alignItems: 'center',
  
},
image:{
  maxWidth:50,
  maxHeight:50
},
})