import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { launchImageLibrary } from "react-native-image-picker";
import addProductScreenStyle from "./addProductScreenStyle";

const AddProductScreen = ({ navigation, route }) => {
  const { reloadProducts } = route.params || {};
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const generateRandomId = () => Math.floor(Math.random() * 1000000);

  const openImagePicker = () => {
    const options = { mediaType: "photo", quality: 1 };

    const callback = (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log("ImagePicker Error: ", response.errorMessage);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Failed to pick image",
        });
      } else {
        const imageUri = response.assets[0]?.uri;
        setImage(imageUri);
      }
    };

    launchImageLibrary(options, callback);
  };

  const saveProduct = async () => {
    if (!name || !price || !image) {
      Toast.show({
        type: "error",
        text1: "Validation Error",
        text2: "Name, Price, and Image are required",
      });
      return;
    }

    try {
      const newProduct = { id: generateRandomId(), name, price, image };
      const storedProducts = await AsyncStorage.getItem("products");
      const products = storedProducts ? JSON.parse(storedProducts) : [];

      const duplicate = products.find((product) => product.name === name);
      if (duplicate) {
        Toast.show({
          type: "error",
          text1: "Duplicate Product",
          text2: "Product already exists",
        });
        return;
      }

      const updatedProducts = [...products, newProduct];
      await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));

      Toast.show({
        type: "success",
        text1: "Product Added",
        text2: `${name} has been added.`,
      });

      if (reloadProducts) reloadProducts();
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Storage Error",
        text2: error.message,
      });
    }
  };

  return (
    <ScrollView style={addProductScreenStyle.container}>
      <TextInput
        placeholder="Product Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
        style={addProductScreenStyle.input}
      />
      <TextInput
        placeholder="Price"
        placeholderTextColor="#999"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
        style={addProductScreenStyle.input}
      />
      <View style={addProductScreenStyle.imagePickerContainer}>
        <Button title="Open Gallery" onPress={openImagePicker} />
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={addProductScreenStyle.previewImage}
          resizeMode="contain"
        />
      )}
      <Button title="Add Product" onPress={saveProduct} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};

export default AddProductScreen;
