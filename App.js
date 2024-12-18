import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/loginScreen/LoginScreen'
import HomeScreen from './src/screens/homeScreen/HomeScreen'
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App