import { StyleSheet } from "react-native";

export default addProductScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    input: {
      height: 50,
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 10,
      marginVertical: 10,
      borderRadius: 8,
    },
    imagePickerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    previewImage: {
      width: "100%",
      height: 200,
      marginVertical: 10,
      borderRadius: 10,
    },
  });