import { StyleSheet } from "react-native";

export default productCardStyle = StyleSheet.create({
    cardContainer: {
      width: 150,
      backgroundColor: "#f5f5f5",
      borderRadius: 10,
      padding: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 1,
      position: "relative",
      marginBottom: 16,
    },
    deleteIcon: {
      position: "absolute",
      top: 8,
      right: 8,
      zIndex: 1,
    },
    productImage: {
      width: 100,
      height: 100,
      marginBottom: 12,
    },
    productName: {
      fontSize: 14,
      fontWeight: "600",
      color: "#333",
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#555",
    },
  });