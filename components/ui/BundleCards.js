import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getNetworkLogo } from "../../utils/networkLogoUtil";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import getNetworkColor from "../../utils/utils";


export default function BundleCards() {
  const navigation = useNavigation()

  const bundles = [
    { id: 1, size: "2GB", network: "Airtel", price: "K1,500", seller: "John M.", initial: "J", duration: "7 days" },
    { id: 2, size: "5GB", network: "Airtel", price: "K3,000", seller: "Lucy P.", initial: "L", duration: "14 days" },
    { id: 3, size: "10GB", network: "TNM", price: "K6,000", seller: "Mike T.", initial: "M", duration: "30 days" },
    { id: 4, size: "1.5GB", network: "Airtel", price: "K1,200", seller: "Grace B.", initial: "G", duration: "7 days" },
    { id: 5, size: "20GB", network: "TNM", price: "K12,000", seller: "Paul R.", initial: "P", duration: "30 days" },
    { id: 6, size: "3GB", network: "Airtel", price: "K2,100", seller: "Anna D.", initial: "A", duration: "10 days" },
    { id: 7, size: "8GB", network: "TNM", price: "K4,800", seller: "James K.", initial: "J", duration: "21 days" },
    { id: 8, size: "15GB", network: "Airtel", price: "K9,000", seller: "Brian S.", initial: "B", duration: "30 days" },
    { id: 9, size: "500MB", network: "TNM", price: "K500", seller: "Daisy L.", initial: "D", duration: "3 days" },
    { id: 10, size: "25GB", network: "Airtel", price: "K15,000", seller: "Kevin M.", initial: "K", duration: "60 days" },
    { id: 11, size: "12GB", network: "TNM", price: "K7,200", seller: "Rita C.", initial: "R", duration: "30 days" },
    { id: 12, size: "6GB", network: "Airtel", price: "K3,600", seller: "Tom W.", initial: "T", duration: "14 days" },
    { id: 13, size: "18GB", network: "TNM", price: "K10,800", seller: "Nina H.", initial: "N", duration: "45 days" },
    { id: 14, size: "4GB", network: "Airtel", price: "K2,500", seller: "Oscar Z.", initial: "O", duration: "10 days" },
    { id: 15, size: "30GB", network: "TNM", price: "K18,000", seller: "Peter G.", initial: "P", duration: "90 days" },
  ];

  return (
    <ScrollView className="bg-gray-100 p-4">

      {bundles.map((bundle) => (
        <View key={bundle.id} className="bg-white rounded-xl p-4 shadow-md mb-4">

          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center space-x-3">

              <View className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm border border-gray-200 p-2">
                {getNetworkLogo(bundle.network)}
              </View>

              <View>
                <Text className="text-lg font-bold text-gray-900">  {bundle.size}</Text>
                <Text className="text-gray-500 text-sm">  {bundle.network}</Text>
              </View>
            </View>

            <Text className="text-blue-600 font-bold text-lg">{bundle.price}</Text>
          </View>

          <View className="flex-row justify-end mb-3">
            <View className="flex-row items-center space-x-2">
              <View className="w-8 h-8 rounded-full items-center justify-center m-2" style={{backgroundColor: getNetworkColor(bundle.network)}}>
                <Text className="text-white font-bold">{bundle.initial}</Text>
              </View>
              <Text className="text-gray-700 font-medium">{bundle.seller}</Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center mb-4">
            <View className="bg-gray-200 px-3 py-1 rounded-full">
              <Text className="text-gray-600 text-sm">Valid for {bundle.duration}</Text>
            </View>

            <TouchableOpacity className="bg-gray-100 px-3 py-1 rounded-md">
              <Text className="text-gray-600 text-sm">Preview</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="bg-blue-600 py-3 rounded-lg"
            onPress={()=> navigation.navigate('BundleDetails')}
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-center text-lg">Buy Now</Text>
          </TouchableOpacity>

        </View>
      ))}

    </ScrollView>
  );
}
