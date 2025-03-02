import React from 'react'
import { Image,Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen"
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name = "Home"
        component={HomeScreen}
        options={{
          headerStyle:{backgroundColor:"#5C3EBC"},
          headerTitle:() => (
            <Image
            source={require("../../assets/getirlogo.png")}
            style ={{width:70,height:30,}}
            />
          )
        }}
        />
        <Stack.Screen
        name = "CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor:'white',
          headerBackTitle:"",
          headerStyle:{backgroundColor:"#5C3EBC"},
          headerTitle:() => (
            <Text style = {{fontWeight:'bold',fontSize:15,color:'white'}}>Ürünler</Text>
          )
        }}
        />
        <Stack.Screen 
        options={{
          headerBackTitle:"",
          headerStyle: {backgroundColor:"#5C3EBC"},
          headerTintColor:"white",
          headerTitle:() => (
            <Text style={{fontWeight:'bold',color:'white',fontSize:15,}}>Ürünn Detayı</Text>
          )
        }}
        name = "ProductDetails"
        component={ProductDetailsScreen}
      
        />
       
        


    </Stack.Navigator>
  )
}

export default HomeNavigator