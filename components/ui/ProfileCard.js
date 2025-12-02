import React from "react";
import { View, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function ProfileCard() {
  return (
    <View className="bg-white rounded-sm shadow-lg">
      <Text className="text-3xl font-bold text-black px-6 pt-6">Profile</Text>
      <View className="flex-row px-6 pt-6 items-center">
        {/* Avatar */}
        <View className="relative">
          <View className="w-20 h-20 rounded-full bg-blue-500 justify-center items-center">
            <Text className="text-3xl font-bold text-white">JD</Text>
          </View>
          <View className="absolute bottom-0 right-0 bg-white rounded-full border-2 border-gray-100 p-1.5 shadow-sm">
            <Ionicons name="pencil" size={16} color="#666" />
          </View>
        </View>

        <View className="ml-5 flex-1">
          <Text className="text-xl font-bold text-gray-900">John Doe</Text>
          <Text className="text-base text-gray-500 mt-1">+265 888 123 456</Text>     
        </View>
      </View>

      <View className="flex-row justify-around bg-gray-100 mx-6 my-6 py-6 rounded-xl">
        <View className="items-center">
          <Text className="text-3xl font-bold text-black">12</Text>
          <Text className="text-sm text-gray-600 mt-1">Sold</Text>
        </View>
        <View className="items-center">
          <Text className="text-3xl font-bold text-black">28</Text>
          <Text className="text-sm text-gray-600 mt-1">Purchased</Text>
        </View>
      </View>
    </View>
  );
}