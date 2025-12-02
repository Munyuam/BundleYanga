import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Feather from "@react-native-vector-icons/feather";

export default function WalletCard() {
  return (
    <View className="bg-blue-600 p-5 rounded-sm">
      
      <Text className="text-white text-2xl font-bold mb-4">
        Wallet
      </Text>

      <View className="bg-blue-500 p-5 rounded-xl">
        
        <Text className="text-white text-sm">
          Available Balance
        </Text>

        <Text className="text-white text-4xl font-bold my-3">
          K17,300
        </Text>

        <View className="flex-row justify-between mt-4">

          <TouchableOpacity className="bg-white px-6 py-3 rounded-xl flex-row items-center">
            <Feather name="plus" size={16} color="#2563EB" />
            <Text className="text-blue-600 font-semibold ml-2">
              Top Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-blue-300 px-6 py-3 rounded-xl flex-row items-center">
            <Feather name="arrow-up-right" size={16} color="white" />
            <Text className="text-white font-semibold ml-2">
              Withdraw
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
