import React from 'react'
import { FlatList,View,Image,Dimensions } from 'react-native'

const {width,height} = Dimensions.get("window")

function index({images}:{images:string[]}) {
  return (
    <View>
   <FlatList
   data={images}
   style ={{width:width*0.5,height:height*0.2}}
   renderItem={(item) =>(
    <Image 
    source={{uri:item.item}}
    
    style ={{width:width*0.5,height:height*0.20}}
    />
   )}
   horizontal
   showsHorizontalScrollIndicator={false}
   snapToInterval={width}
   snapToAlignment={"center"}
   decelerationRate={'fast'}
   >


   </FlatList>
   </View>
  )
}

export default index;