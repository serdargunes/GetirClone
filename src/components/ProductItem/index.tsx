import React from 'react'
import { View,Text,TouchableOpacity,Image,Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions.get('window')

type productItemType = {
    item: Product
}
function index({item}:productItemType) {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetails",{product:item})}
    style = {{
        width:width * 0.28,
        marginTop:12,
        marginLeft:12,
        height:height*0.24,
        marginBottom:0,
        
    }}>
        <Image style = {{width:width*0.28,height:width*0.28,borderRadius:12,borderWidth:1,borderColor:'#F0EFF7'}}
         source={{uri:item.image}}/>
         <View style = {{flexDirection:'row',marginTop:10,alignItems:'center'}}>
            <Text style = {{fontSize:13,color:"#747990",textDecorationLine:'line-through',}}>
                {"\u20BA"}<Text>{item.fiyat}</Text></Text>
            <Text style ={{
                color:"#5D3EBD",
                fontWeight:'bold',
                fontSize:14,
                marginLeft:5,
            }}>
                
                <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
            </Text>
         </View>
         <Text style = {{fontSize:13,fontWeight:'600',marginTop:5}}>{item.name}</Text>
         <Text style = {{color:'#747990',fontSize:12,marginTop:4,fontWeight:500}}>{item.miktar}</Text>
         <View style = {{alignItems:'center',shadowRadius:3.8,shadowOpacity:0.2,justifyContent:'center',width:30,height:30,borderWidth:0.2,borderColor:"#5D3EBD",backgroundColor:'white',position:'absolute',right:-4,top:-6,borderRadius:6}}>
         <AntDesign name="plus" size={18} color="#5D3EBD"  />
         </View>
    </TouchableOpacity>
  )
}

export default index;