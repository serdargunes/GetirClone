import React from 'react';
import {Text,View,Image } from 'react-native';
import styles from './styles'
import Entypo from '@expo/vector-icons/Entypo';
function index() {
    return(
        <View style = {styles.headerMain}>
        <View style = {styles.headerOne}>
            <Image style = {styles.image} 
            source={{uri:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png"}}/>
            <View style = {styles.headerOneView}>
            <Text style = {{fontWeight:600,fontSize:16,}}>Ev</Text>
            <Text style = {{fontWeight:500,fontSize:14,color:'#6E7480',marginLeft:6,marginRight:1,}}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
            <Entypo name="chevron-right" size={20} color="5D3EBD" />
            </View>
            <View style = {styles.headerTwo}>
                <Text style = {{fontSize:12,fontWeight:'bold',color:'#5D3EBD'}}>TVS</Text>
                <Text style = {{fontSize:20,fontWeight:'bold',color:'#5D3EBD'}}>13
                    <Text style = {{fontSize:16,fontWeight:'bold'}}>dk</Text>
                </Text>
            </View>
        </View>
        </View>
    )

}
export default index;