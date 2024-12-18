import { StyleSheet } from "react-native";

export default inputStyle = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
      paddingRight: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconContainer: {
      paddingRight: 10,
    },
    inputWrapper: {
      flex: 1,
      position: 'relative',
    },
    input: {
      height: 50,
      fontSize: 16,
      color: '#333',
      paddingHorizontal: 10,
      width:'90%',
    },
    innerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    eyeIcon: {
      width:20,
      },
    underline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
      backgroundColor: '#ddd',
    },
  });