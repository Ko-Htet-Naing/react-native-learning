import React from 'react'
import { View,Text,StyleSheet, ImageBackground } from 'react-native'
import cookie1 from "@/assets/images/Cookie-1.jpeg"
const app = () =>{
  const { container, text,ImageStyle} = style
  return (
   <React.Fragment>
  
    <View style={container}>
    <ImageBackground source={cookie1} resizeMode="cover" style={ImageStyle}>
<Text style={text}>Hello World</Text>
      <Text style={text}>World Hello</Text>
</ImageBackground>
      
    </View>
   </React.Fragment>
  )
}
export default app

const style = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'column',
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  text: {
    color : 'white',
    paddingTop : 20,
    paddingBottom : 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize : 42,
    fontWeight : 'bold',
    textAlign : 'center',
    marginTop : 20,
  },
  ImageStyle: {
    width : '100%',
    height : '100%',
    flex: 1,
    resizeMode : 'cover',
    justifyContent: 'center'
  }
})