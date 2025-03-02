import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen"
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Stack = createStackNavigator()

function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          )
        }}
        />
        <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitle: "",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Ürünler</Text>
          )
        }}
        />
        <Stack.Screen 
        options={{
          headerBackTitle: "",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTintColor: "white",
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}>Ürün Detayı</Text>
          ),
          headerRight: () => {
            return(
              <TouchableOpacity style = {{paddingRight:12,}}>
                <Text><FontAwesome name="heart" size={24} color="black" /></Text>
              </TouchableOpacity>
            )
          },
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 12 }}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            );
          
          },
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator