import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@react-native-vector-icons/feather';

export default function BrowseBundleContainer() {
  return (
      <View className="bg-white px-6 pt-6 pb-4 shadow-sm">
        <Text className="text-3xl text-black font-bold capitalize mb-4">
          Browse Bundles
        </Text>

      <View className="relative mb-4">
        <TextInput
          placeholder="Search Bundle (e.g., 1GB Airtel)"
          className=" pl-10 pr-4 py-3 bg-gray-200 rounded-xl"
        />
        <Feather
            name="search"
            size={20}
            color="#6C757D"
            style={{ position: 'absolute', left: 10, top: '50%', transform: [{ translateY: -10 }] }}          />
      </View>
       <View className="flex-row space-x-3 mb-4">
        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-xl mx-2">
          <Text className="text-white font-semibold">All</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-xl mx-2">
          <Text className="text-black font-semibold">Airtel</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-xl mx-1">
          <Text className="text-black font-semibold">Tnm</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal ={true} showsHorizontalScrollIndicator = {false} className = "mb-4">
        <View className ="flex-row space-x-3 mb-4">
        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-xl mx-1">
          <Text className="text-white font-semibold">All Sizes</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-xl mx-1">
          <Text className="text-black font-semibold">500MB-1GB</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-xl mx-1">
          <Text className="text-black font-semibold">2GB-5GB</Text>
        </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-xl mx-1">
          <Text className="text-black font-semibold">10GB</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
