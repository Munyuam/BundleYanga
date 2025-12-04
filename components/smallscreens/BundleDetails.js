import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function BundleDetails({ navigation }) {
  
  return (
    <ScrollView>
      <View className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between px-5 pt-14 pb-4 bg-white shadow-lg">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <Text className="text-lg font-semibold text-black">Bundle Details</Text>

        <TouchableOpacity>
          <Feather name="share-2" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <View className="mx-5 mt-6 bg-white rounded-3xl overflow-hidden shadow-sm">

        <View className="items-center pt-10 pb-8 bg-white">
            <View className="w-16 h-16 bg-red-100 rounded-2xl items-center justify-center mb-4">
            <Ionicons name="wifi" size={36} color="#EF4444" />
            </View>
            <Text className="text-6xl font-bold text-black">2GB</Text>
            <Text className="text-lg text-gray-600 mt-2">Airtel</Text>
        </View>

        <View className="flex-row px-6 pt-6 pb-2">
          <View className="flex-1 bg-gray-100 rounded-2xl px-6 py-5 mr-3">
            <Text className="text-sm text-gray-500">Price</Text>
            <Text className="text-3xl font-bold text-blue-600 mt-1">K1,500</Text>
          </View>

          <View className="flex-1 bg-gray-100 rounded-2xl px-6 py-5">
            <Text className="text-sm text-gray-500">Validity</Text>
            <Text className="text-3xl font-bold text-black mt-1">7 days</Text>
          </View>
        </View>

        <View className="px-6 pb-10 pt-6">
          <TouchableOpacity 
             className="bg-green-500 rounded-md py-5 items-center justify-center"
            onPress={()=> navigation.navigate('Checkout')}
          >
            <Text className="text-white text-lg font-semibold">Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>

        <View className="bg-white shadow-sm mt-6 mx-5 mb-4 rounded-lg ">
            <View className="flex-row px-6 pt-6 items-center">
            <View className="relative">
                <View className="w-20 h-20 rounded-full bg-blue-500 justify-center items-center">
                <Text className="text-3xl font-bold text-white">JD</Text>
                </View>
            </View>
    
            <View className="ml-5 flex-1">
                <Text className="text-xl font-bold text-gray-900">John Doe</Text>
                <Text className="text-base text-gray-500 mt-1">+265 888 123 456</Text>  
                <Text className="text-base text-gray-500 mt-1">
                    <FontAwesome5 name="certificate" size={15} color="#f59e0b"/> 
                     Approved trader 
                </Text>   
            </View>
            
            </View>
        
            <View className="flex-row justify-around bg-gray-100 mx-6 my-6 py-6 rounded-xl">
            <View className="items-center">
                <Text className="text-sm text-gray-600 mt-1">Bundle Sold</Text>
                <Text className="text-3xl font-bold text-black">12</Text>
            </View>
            <View className="items-center">
                <Text className="text-sm text-gray-600 mt-1">Joined On</Text>
                <Text className="text-3xl font-bold text-black">28/09/09</Text>
            </View>
            </View>
        </View>
    </View>
    </ScrollView>
  );
}