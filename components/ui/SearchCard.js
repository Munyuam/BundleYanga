import React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchCard() {
  const recentSearches = ["1GB Airtel", "5GB TNM", "2GB"];
  const popularSearches = ["1GB", "2GB", "5GB", "Airtel", "TNM", "Cheap bundles"];

  return (
    <View className="flex-1">
      <View className="flex-row items-center bg-white rounded-sm px-5 py-6 shadow-md">
        <TouchableOpacity className="mr-4">
          <Ionicons name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>

        <View className="flex-row items-center flex-1 relative">
          <Ionicons name="search" size={22} color="#999" />
          <TextInput
            placeholder="Search bundles..."
            placeholderTextColor="#999"
            className="ml-3 flex-1 text-lg text-gray-800 font-medium border-2 border-gray-100 rounded-full px-4"
            autoFocus={false}
          />
        </View>
      </View>

      <ScrollView className="flex-1 mt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-gray-800 px-6 mb-3">Recent Searches</Text>
        <View className="px-5 space-y-3">
          {recentSearches.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center bg-white rounded-full px-5 py-4 mt-2 shadow-sm"
            >
              <Ionicons name="search" size={20} color="#bbb" />
              <Text className="ml-4 text-base text-gray-700 font-medium">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-xl font-bold text-gray-800 px-6 mt-10 mb-3">Popular Searches</Text>
        <View className="flex-row flex-wrap px-5 gap-3">
          {popularSearches.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white rounded-full px-5 py-3 shadow-sm border border-gray-200"
            >
              <Text className="text-base text-gray-700 font-medium">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}