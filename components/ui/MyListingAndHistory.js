import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AIRTEL_LOGO = require("../../assets/images/airtellogo.png");  
const TNM_LOGO = require("../../assets/images/tnmlogo.png");       

export default function MyListingsAndHistory() {
  const listings = [
    { id: 1, size: "3GB", network: "Airtel", price: "K2,100" },
    { id: 2, size: "1GB", network: "TNM", price: "K950" },
  ];

  const purchases = [
    { id: 1, size: "2GB", network: "Airtel", date: "Nov 23, 2025", price: "K1,500" },
    { id: 2, size: "5GB", network: "TNM", date: "Nov 20, 2025", price: "K3,200" },
  ];

  const NetworkLogo = ({ network }) => {
    return (
      <Image
        source={network === "Airtel" ? AIRTEL_LOGO : TNM_LOGO}
        className="w-10 h-10 rounded-cover"
        resizeMode="contain"
        style={{ backgroundColor: network === "Airtel" ? "#FFFFF" : "#FFFFF" }} 
      />
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <Text className="text-lg font-bold text-gray-800 px-6 pt-6 pb-3">My Listings</Text>
      <View className="px-4">
        {listings.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-white rounded-2xl p-5 mb-4 shadow-sm flex-row justify-between items-center"
          >
            <View>
              <Text className="text-md font-bold text-gray-900">
                {item.size} {item.network}
              </Text>
              <Text className="text-gray-500 text-base">{item.price}</Text>
            </View>

            <View className="flex-row items-center space-x-4">
              <NetworkLogo network={item.network} />
              <Ionicons name="chevron-forward" size={26} color="#888" />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-lg font-bold text-gray-800 px-6 pt-8 pb-3">Purchase History</Text>
      <View className="px-4 pb-8">
        {purchases.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-white rounded-2xl p-5 mb-4 shadow-sm flex-row justify-between items-center"
          >
            <View>
              <Text className="text-md font-bold text-gray-900">
                {item.size} {item.network}
              </Text>
              <Text className="text-gray-500 text-base">{item.date}</Text>
            </View>

            <View className="flex-row items-center space-x-3">
              <Text className="text-blue-600 font-bold text-lg">{item.price} </Text>
              <NetworkLogo network={item.network} />
              <Ionicons name="chevron-forward" size={26} color="#888" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}