import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, Feather} from "@expo/vector-icons";

import Homescreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import SellScreen from "./screens/SellScreen";
import WalletScreen from "./screens/WalletScreen";
import Profilescreen from "./screens/ProfileScreen";

import './global.css';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false, 
          tabBarActiveTintColor: '#157AF6',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: { 
            backgroundColor: '#fff', 
            height: 75, 
            marginBottom: 50, 
            paddingTop: 5,
            borderTopWidth: 0,
            elevation: 5
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } 
            if (route.name === 'Search') {
              iconName = 'search';
              return <Feather name={iconName} size={size} color={color} />;
            } 
            if (route.name === 'Sell') {
              iconName = 'plus-circle';
              return <Feather name={iconName} size={size} color={color} />;
            } 
            if (route.name === 'Wallet') {
              iconName = 'wallet-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } 
            if (route.name === 'Profile') {
              iconName = 'user';
              return <Feather name={iconName} size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Sell" component={SellScreen} options={{headerShown:true, headerTitle: "Sell Bundle"}}/>
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={Profilescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
