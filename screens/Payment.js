import { Alert, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import {StripeProvider, CardField, useConfirmPayment} from '@stripe/stripe-react-native'
import InputOutils from '../components/InputOutils'
import MyColors from '../constants/colors';
import {panierActions} from '../store/store';
import BtnSuppPanier from '../components/BtnSuppPanier';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function Payment({route}) {
    const amount = parseInt(route.params.total);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const publishableKey = 'pk_test_51MSXzRJFUewSdUSKc6T7HHhkU7Su3VzxoaqGTzhKEB8aaB3hseJmjR4ML9NK3ePcWLL6nOB5KAKNNA8jTpDI99GD00L3l8bkHH';
    const {confirmPayment, loading } = useConfirmPayment();

    async function handlepay(){
        console.log('handle payment')
        const response = await axios.get('https://ggmarket.alwaysdata.net/payementGateways/'+amount)
        console.log(response.data);
        
        const {error, paymentIntent} = await confirmPayment(response.data.clientSecret,{
            paymentMethodType: 'Card',
            currency: 'cad'
        })
        if(error){
            Alert.alert(`Error code: ${error.code}`, error.message)
        }else if(paymentIntent){
            Alert.alert('Transaction approuvé, Merci à la prochaine!')
            dispatch(panierActions.emptyCart())
            navigation.navigate('Cart')
        }
    }
    
  return (
    <StripeProvider publishableKey={publishableKey}>
    <View style={styles.viewcontainer}>
      <InputOutils label='Nom' placeholder='Prénom Nom' />
      {/* label, placeholder, inputconfig, securedField */}
      <CardField postalCodeEnabled={false} style={styles.cardField} cardStyle={{borderColor:MyColors.grey400, borderWidth:1,placeholderColor:MyColors.orange}}/>
      <BtnSuppPanier text={'Payez'} icon='attach-money' color={MyColors.orange} tcolor='#FFF' onPress={handlepay}/>
      
      {loading?  
          <View style={styles.loaderStyle}>
            <ActivityIndicator size='large' color='#000'/>
          </View> : null}
      
    </View>
    </StripeProvider>
  )
}

const styles = StyleSheet.create({
    viewcontainer:{
        flex:1,
        alignItems:'center',
        

    },
    cardField:{
        width:'90%',
        height: 80,
        marginVertical:20,
        flexDirection:'column',
    },
    loaderStyle:{
        marginVertical:16,
        alignItems:'center'
    },
})