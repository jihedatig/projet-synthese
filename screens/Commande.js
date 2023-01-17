import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState } from 'react'
import React from 'react'
import ChatInput from '../components/ChatInput'

import PanierBtn from '../components/PanierBtn'

export default function commande() {

    return (
        <View>
                  <View   >

                  <View style={styles.header} >
                  <Text style={styles.titre}>Votre commande</Text>
                  </View>
                  <View style={styles.header} >
                  <Text style={styles.titre}>prix: 300$</Text>
                  </View>
                  <View style={styles.produitsColum}  >

                    <Text style={styles.titre}>TPS: 00$</Text>
                    <Text style={styles.titre}>TVQ: 00$</Text>
                    <Text style={styles.titre}>Livraison: 00$</Text>

                    </View>

                    <View style={styles.produitsColum} >
                  <Text style={styles.titre}>prixtotal: 300$</Text>
                  </View>


                  </View>

                  <View style={styles.produitsColum} >

                  <Text style={styles.titre}>Adresse de livraison</Text>
                  <ChatInput placeholder={'votre adresse'}  />
                  </View>

                  <View style={styles.produitsRow}  >

                      <View  style={styles.produitsColum2}  >
                      <Text style={styles.titre}>ville</Text>
                  <ChatInput placeholder={'votre adresse'}  />

                      </View>

                      <View  style={styles.produitsColum2}  >

                  <Text style={styles.titre}>code postal</Text>
                  <ChatInput placeholder={'votre adresse'}  />

                      </View>
                  </View>


                  <View style={styles.produitsRow}  >
                    
                    <View  style={styles.produitsColum2}  >

                <Text style={styles.titre}>pays</Text>
                  <ChatInput placeholder={'votre adresse'}  />

                    </View>

                    <View  style={styles.produitsColum2}  >

                <Text style={styles.titre}>Province</Text>
                  <ChatInput placeholder={'votre adresse'}  />

                    </View>
            
                </View>

                <View style={styles.header}  >

                <PanierBtn  text={'payer la commande'}  />

                </View>






        </View>
       


    )

}

const styles = StyleSheet.create({

  container:{
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'flex-end'
},

    titre:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  header:{
    paddingTop:59,
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
    borderBottomWidth: 3,

  },
  produitsColum:{
    flexDirection: 'colum',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:10,
    paddingTop:10
    
  },
  produitsColum2:{
    flexDirection: 'colum',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,

    paddingBottom:10,
    paddingTop:10
    
  },
  image:{
    maxWidth:50,
    maxHeight:50
  },
  })