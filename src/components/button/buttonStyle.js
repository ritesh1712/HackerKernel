import { StyleSheet } from "react-native";

export default ButtonStyles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    disabled: {
      backgroundColor: '#B0BEC5',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      marginRight: 8,
    },
    imageContainer:{
      position:'relative',
      left:-50
    }
  });