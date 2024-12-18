import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import productCardStyle from "./productCardStyle";

const ProductCard = ({ image, name, price, onDelete }) => {
  return (
    <View style={productCardStyle.cardContainer}>
      <TouchableOpacity style={productCardStyle.deleteIcon} onPress={onDelete}>
        <Icon name="trash-can-outline" size={24} color="black" />
      </TouchableOpacity>

      <Image source={image} style={productCardStyle.productImage} resizeMode="contain" />

      <Text style={productCardStyle.productName}>{name}</Text>
      <Text style={productCardStyle.productPrice}>$ {price}</Text>
    </View>
  );
};



export default ProductCard;
