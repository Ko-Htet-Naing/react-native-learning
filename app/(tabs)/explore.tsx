import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const app = () =>{
  const { text,container } = style;
  return(
    <View style={container}>
      <Text style={text}> Hello I am explorer</Text>
    </View>
  )
}

export default app

const style = StyleSheet.create({
  container: {
  flex : 1,
  justifyContent : 'center',
  alignItems : 'center',
  backgroundColor : '#fff',
  },
   text:{
   color : "#000",
   backgroundColor : 'rgba(0,0,0,0.5)',
   padding : 10
   }
})