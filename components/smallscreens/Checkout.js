import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Checkout({ navigation }) {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const isButtonEnabled = selectedMethod && phoneNumber.trim().length >= 9;

  return (
    <View className="flex-1 bg-gray-100">

      <View className="flex-row items-center gap-6 px-5 pt-14 pb-4 bg-white shadow-lg">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-black">
          Checkout
        </Text>
      </View>

      <View className="bg-white mt-4 mx-6 rounded-xl shadow-md p-5">
        <Text className="text-lg font-bold">Order Summary</Text>

        <View className="mt-3 space-y-2">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Bundle</Text>
            <Text className="text-black font-medium">2GB Airtel</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Validity</Text>
            <Text className="text-black font-medium">7 days</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Seller</Text>
            <Text className="text-black font-medium">John M.</Text>
          </View>
        </View>

        <View className="border-t mt-4 pt-4 flex-row justify-between">
          <Text className="text-lg font-semibold text-gray-700">
            Total Amount
          </Text>
          <Text className="text-xl font-bold text-blue-600">K1.500</Text>
        </View>
      </View>

      <View className="mt-6 mx-6">
        <Text className="text-gray-600 mb-3">Select Payment Method</Text>
        <TouchableOpacity
          onPress={() => setSelectedMethod("airtel")}
          className={`flex-row items-center p-4 mb-3 rounded-2xl bg-white shadow
            ${selectedMethod === "airtel" ? "border-2 border-blue-500" : ""}
          `}
        >
          <View className="w-10 h-10 bg-red-600 rounded-xl" />
          <View className="ml-4 flex-1">
            <Text className="text-black font-semibold">Airtel Money</Text>
            <Text className="text-gray-500">Pay with Airtel Money</Text>
          </View>

          {selectedMethod === "airtel" && (
            <Ionicons name="checkmark-circle" size={26} color="#2563eb" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedMethod("tnm")}
          className={`flex-row items-center p-4 rounded-2xl bg-white shadow
            ${selectedMethod === "tnm" ? "border-2 border-blue-500" : ""}
          `}
        >
          <View className="w-10 h-10 bg-green-700 rounded-xl" />
          <View className="ml-4 flex-1">
            <Text className="text-black font-semibold">TNM Mpamba</Text>
            <Text className="text-gray-500">Pay with Mpamba</Text>
          </View>

          {selectedMethod === "tnm" && (
            <Ionicons name="checkmark-circle" size={26} color="#2563eb" />
          )}
        </TouchableOpacity>
      </View>

      <View className="mt-6 mx-6">
        <Text className="text-gray-600">Enter Mobile Number</Text>

        <TextInput
          className="bg-white rounded-xl border border-gray-200 mt-4 p-4"
          placeholder="+265 888 123 456"
          placeholderTextColor={"lightgray"}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>


      <View className="mt-8 mx-6">
        <TouchableOpacity
          disabled={!isButtonEnabled}
          className={`p-4 rounded-xl items-center 
            ${isButtonEnabled ? "bg-green-600" : "bg-gray-300"}
          `}
        >
          <Text className="text-white font-semibold text-lg">
            Pay K1,500
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
