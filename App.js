import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';

import Header from './components/Header';
import LoginPage from './screens/LoginPage';

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
    <>
    <StatusBar style='light'/>

    
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      header: () => {return <Header/>},
     }}>
      <Tab.Screen name="Home" component={HomeStackScreen} 
      />
      <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
