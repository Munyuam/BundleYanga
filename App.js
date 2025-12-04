// App.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import HomeStack from "./screens/HomeStack";           
import SearchScreen from "./screens/SearchScreen";
import SellScreen from "./screens/SellScreen";
import WalletScreen from "./screens/WalletScreen";
import ProfileScreen from "./screens/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#157AF6",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 75,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 0,
            marginBottom: 40,
            elevation: 5,
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={20} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={20} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Sell"
          component={SellScreen}
          options={{
            headerShown: true,
            headerTitle: "Sell Bundle",
            tabBarLabel: "Sell",
            tabBarIcon: ({ color, size }) => (
              <Feather name="plus-circle" size={28} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarLabel: "Wallet",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wallet-outline" size={20} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}