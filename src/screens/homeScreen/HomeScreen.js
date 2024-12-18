import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import homeScreenStyle from "./homeScreenStyle";
import CardContainer from "../../components/cardContainer/CardContainer";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem("products");
      const productList = storedProducts ? JSON.parse(storedProducts) : [];
      setProducts(productList);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error loading products",
        text2: error.message,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, [])
  );

  const handleDelete = async (id) => {
    try {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));

      Toast.show({
        type: "success",
        text1: "Product Deleted",
        text2: "The product has been removed successfully.",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error deleting product",
        text2: error.message,
      });
    }
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleToggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchQuery("");
  };

  const handleBack = () => {
    const routes = navigation.getState().routes;
    const currentRoute = routes[routes.length - 1]?.name;

    if (currentRoute === "Login") {
      Toast.show({
        type: "info",
        text1: "Back action is not allowed",
        text2: "You are on the Login screen.",
      });
      return;
    }

    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // Clear all stored data
      navigation.replace("Login"); // Redirect to Login screen
      Toast.show({
        type: "success",
        text1: "Logged Out",
        text2: "You have successfully logged out.",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Logout Error",
        text2: error.message,
      });
    }
  };

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <View style={homeScreenStyle.container}>
      <View style={homeScreenStyle.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleToggleSearch}>
          <Icon
            name={isSearchVisible ? "close" : "search"}
            size={24}
            color="black"
          />
        </TouchableOpacity>

      </View>
      <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity style={{backgroundColor:'#007AFF',marginVertical:10,padding:5,width:80}} onPress={handleLogout}>
        <Text style={{textAlign:'center',fontSize:15,color:'white',fontWeight:'500'}}>
          Log out
        </Text>
        </TouchableOpacity>
      </View>

      {isSearchVisible && (
        <TextInput
          placeholder="Search products by name..."
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
          style={homeScreenStyle.searchBar}
          placeholderTextColor={"#999"}
        />
      )}

      <ScrollView contentContainerStyle={homeScreenStyle.scrollContainer}>
        <Text style={homeScreenStyle.shop}>Hi-Fi Shop & Service</Text>
        {filteredProducts.length > 0 ? (
          <CardContainer
            title="Products"
            products={filteredProducts}
            handleDelete={handleDelete}
          />
        ) : (
          <Text style={homeScreenStyle.noProductsText}>No Product Found</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={homeScreenStyle.fab}
        onPress={() =>
          navigation.navigate("AddProduct", { reloadProducts: loadProducts })
        }
      >
        <Text style={homeScreenStyle.fabText}>+</Text>
      </TouchableOpacity>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default HomeScreen;
