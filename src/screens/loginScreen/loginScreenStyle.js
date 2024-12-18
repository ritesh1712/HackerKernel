import { StyleSheet,Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');


export default loginScreenStyle =  StyleSheet.create({
container:{
        backgroundColor: 'white',
        height:height
},
innerContainer:{
     justifyContent: 'space-between',
     paddingHorizontal:20,
     height:height*0.6,
    },
image:{
    width:width,
    height:height/3,
},
heading:{
    color:'#213350',
    fontSize:30,
    fontWeight: 'bold'    
},
forgotPassword:{
color:'#0165ff',
textAlign:'right'
},
orTextContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

},
line:{
    height: 2,
    width:120,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal:20
},
registerContainer:{
    textAlign:'center',
    fontSize:16
},
registerText:{
    color:'#0165ff',
}

})