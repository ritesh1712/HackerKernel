import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import AddProductScreen from "../screens/addProductScreen/AddProductScreen";


const Stack = createStackNavigator();


export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="AddProduct" component={AddProductScreen} />
    </Stack.Navigator>
  );
}
