import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';

import IconBtn from './components/IconBtn';
import ImgPath from './constants/ImgPath';

import HomeScreen from './screens/HomeScreen';

import Header from './components/Header';

import MyColors from './constants/colors';
import Chat from './screens/Chat';
import Connexion from './screens/Connexion';
import UserProfile from './screens/UserProfile';
import Panier from './screens/Panier';
import OutilsGestion from './screens/OutilsGestion';
import Favories from './screens/Favories';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function Profile() {

  const gestion = useSelector((state) => state.connexion.isAdmin);
  
  
  return (
    <Stack.Navigator>
        <Stack.Screen name='Connexion' component={Connexion}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name='userProfile' component={UserProfile}
        options={{
          headerShown:false
        }}
        />
        {gestion&&<Stack.Screen name='outils' component={OutilsGestion}
        options={{
          headerShown:true
        }}
        />}
        <Stack.Screen name='Favorie' component={Favories}
        options={{
          headerShown:true
        }}
        />
      </Stack.Navigator>
  );
}
function Shopping() {

 
  
  
  return (
    <Stack.Navigator>
        <Stack.Screen name='Cart' component={Panier}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name='pay' component={Payment}
        options={{
          headerShown:true
        }}
        />
        
      </Stack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
  );
}
function AppWrapp(){
  return (
  <>
      <StatusBar style='light'/>

        
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      header: () => {return <Header/>},
      tabBarStyle: {
        backgroundColor: MyColors.grey800,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position:'absolute',
        overflow:'hidden',
      paddingTop:10},
      tabBarActiveTintColor:MyColors.orange,
    }} 
    
    
    >
      <Tab.Screen name="Home" component={HomeStackScreen} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialIcon name="home" color={color} size={size}/>)
      }}
      />
      <Tab.Screen name="Chat" component={Chat} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialIcon name="chat" color={color} size={size}/>)
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialIcon name="person" color={color} size={size}/>)
      }}
      />
      <Tab.Screen name="Panier" component={Shopping} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialIcon name="shopping-cart" color={color} size={size}/>)
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  </>);

}
export default function App() {
  return (
    <Provider store={store}>
    <AppWrapp/>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyle:{
    backgroundColor: MyColors.grey800,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow:'hidden'
  },
});
