import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View className="flex-1 bg-gray-50">
      <Text className="text-lg font-bold text-gray-800 px-6 pt-10 pb-6">Settings</Text>

      <View className="bg-white rounded-2xl mx-4 shadow-sm overflow-hidden">
        <TouchableOpacity className="flex-row items-center justify-between px-6 py-5 border-b border-gray-100">
          <View className="flex-row items-center space-x-4">
            <Ionicons name="settings-outline" size={24} color="#555" />
            <Text className="text-md font-medium text-gray-800"> Account Settings</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between px-6 py-5 border-b border-gray-100">
          <View className="flex-row items-center space-x-4">
            <Feather name="inbox" size={24} color="#555" />
            <Text className="text-md font-medium text-gray-800"> Manage Listings</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="flex-row items-center justify-between bg-white rounded-2xl mx-4 mt-6 px-6 py-5 shadow-sm">
        <View className="flex-row items-center space-x-4">
          <Feather name="log-out" size={24} color="#EF4444" />
          <Text className="text-lg font-medium text-red-500"> Logout</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#EF4444" />
      </TouchableOpacity>
    </View>
  );
}