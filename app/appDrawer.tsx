import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import FavouriteScreen from "../screens/Favourite/FavouriteScreen";
import CartScreen from "../screens/Cart/CartScreen";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import Icon from "react-native-vector-icons/Ionicons";
import App, { RootStackParamList } from "./app";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "@/screens/Products";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarIcon: ({color, size}) => {
          let iconName = 'home';
          if(route.name === 'Home') iconName = 'home';
          else if(route.name === 'Favourite') iconName = 'heart';
          else if(route.name == 'Cart') iconName = 'cart';
          else if(route.name == 'Notification') iconName = 'notifications';
          return <Icon name={iconName} size={size} color={color}/>
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#c67c4e',
        tabBarInactiveTintColor: '#696969'
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigator}options={{headerShown: false}} />
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  )
}
const AppDrawer = () => {
  return <StackNavigator />
};

export default AppDrawer;

