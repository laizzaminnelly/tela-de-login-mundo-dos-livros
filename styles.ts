import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  scrollview:{
    backgroundColor:'#87CEFA',
    paddingHorizontal: 15,
    paddingTop:40,
  },
  container:{
    alignItems:'center',

  },
  logo:{
    width: 155,
    height:150,
    
  },
  h1:{
    color:  '#000',
    fontSize:27,
    fontWeight: 'bold',
    paddingVertical: 10,
    fontFamily:'"Abel", sans-serif'

  },
  h2:{
    color: '#000',
    fontSize: 18,
    fontFamily:'"Abel", sans-serif'
  },
  inputArea:{
    width: '100%',
    paddingTop:20,
  },
  inputLabel:{
    color:'#000',
    fontSize:16,
    fontWeight:'bold',
    paddingBottom:7,
  },
  inputField:{
    color:'#000',
    borderWidth:2,
    borderRadius:5,
    borderColor:'#0000CD',
    fontSize:15,
    padding:10,
    backgroundColor:'white'
  },
  aditionals:{
    width:'100%', 
    
  },
  forgotBtnArea:{
    paddingVertical:20,
    alignSelf:'flex-end',
  },
  forgoBtnText:{
    fontSize:14,
    fontWeight:'bold',
    color:'#4162b7',
  },
  button:{
    backgroundColor:'#4162b7',
    width:'100%',
    padding:10,
    borderRadius:5,
    marginTop:22,

  },
  buttonText:{
    alignSelf:'center',
    color:  'white',
    fontSize:16,
  },
  signUpArea:{
    flexDirection:'row',
    marginTop:30,
  },
  signUpText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#000',
  },
  signUpBtnText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#4162b7',
    marginLeft:5,
  },
  footerArea:{
    marginVertical:30,
  },
  footerText:{
    fontSize:13,
    color:'#000',
  },
  forgotButton:{
    marginTop: 20,
    backgroundColor:'#4162b7',
    width:'100%',
    padding:10,
    borderRadius:5,

  }
})