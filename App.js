import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Provider } from 'react-redux';
import store from './store/store';

import HomeScreen from './screens/HomeScreen';

import Header from './components/Header';
import LoginPage from './screens/LoginPage';
import MyColors from './constants/colors';
import Chat from './screens/Chat';
import Connexion from './screens/Connexion';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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
export default function App() {
  return (
    <Provider store={store}>
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
      <Tab.Screen name="Connexion" component={Connexion} 
      options={{
        tabBarIcon: ({color, size}) => (<MaterialIcon name="person" color={color} size={size}/>)
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
    
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
