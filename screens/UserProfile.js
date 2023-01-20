import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from '../components/Btn'
import MyColors from '../constants/colors'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


export default function UserProfile() {
    const navigation = useNavigation();
    const gestion = useSelector((state) => state.connexion.isAdmin);
    function gestionNav(){
        navigation.navigate('outils')
    }
    function goFavorie(){
      navigation.navigate('Favorie')
  }
  return (
    <View>
      

      
      <View style={styles.btnContainer}>
      {gestion &&<Btn text={'Outils de Gestion'} icon='admin-panel-settings' color={MyColors.grey800} tcolor='#FFF' onPress={gestionNav}/>}
        <Btn text={'Mes Commandes'} icon='history' color={MyColors.grey800} tcolor='#FFF' onPress={gestionNav}/>
        <Btn text={'Favories'} icon='favorite' color={MyColors.grey800} tcolor='#FFF' onPress={goFavorie}/>
        <Btn text={'info'} icon='person' color={MyColors.grey800} tcolor='#FFF' onPress={gestionNav}/>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
    }
})