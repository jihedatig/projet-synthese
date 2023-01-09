import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen';

import Header from './components/Header';
import LoginPage from './screens/LoginPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}
        options={{
          header: () => (
            <Header/>
          ),
         }}
        />
        <Stack.Screen name='LoginScreen' component={LoginPage}
        options={{
          header: () => (
            <Header/>
          ),
         }}
        />
      </Stack.Navigator>
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
