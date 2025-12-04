import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function SellBundleCard() {

  const [provider, setProvider] = useState("airtel");
  const [bundleSize, setBundleSize] = useState("2GB");
  const [price, setPrice] = useState("");
  const [validity, setValidity] = useState("7d");
  const [proof, setProof] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setProof(result.assets[0].uri);
    }
  };

  return (
    <View className="bg-gray-100 p-5 -mt-4">
      <Text className="text-lg font-bold mb-4">Provider</Text>

      <View className="flex-row justify-between mb-6">

       <View className="flex-row justify-between mb-6">
       
            <TouchableOpacity className="bg-white w-[48%] py-6 items-center rounded-2xl shadow">
                <Image
                source={require("../../assets/images/airtellogo.png")}
                className="w-14 h-14 mb-3"
                resizeMode="contain"
                />
                <Text className="font-semibold">Airtel Money</Text>
            </TouchableOpacity>
       
            <TouchableOpacity className="bg-white w-[48%] py-6 items-center rounded-2xl shadow">
                <Image
                source={require("../../assets/images/tnmlogo.png")}
                className="w-14 h-14 mb-3"
                resizeMode="contain"
            />
                <Text className="font-semibold">TNM Mpamba</Text>
            </TouchableOpacity>
             
        </View>
      </View>

      <Text className="font-semibold mb-2">Bundle Size</Text>
      <View className="bg-white rounded-xl border px-4 mb-4">
        <TextInput
          value={bundleSize}
          onChangeText={setBundleSize}
          placeholder="e.g 2GB"
          className="h-12"
        />
      </View>

      <Text className="font-semibold mb-2">Set Your Price (MWK)</Text>
      <View className="bg-white rounded-xl border px-4 mb-4">
        <TextInput
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="e.g 1500"
          className="h-12"
        />
      </View>

      <Text className="font-semibold mb-3">Validity (Days)</Text>

      <View className="flex-row justify-between mb-6">

        {["3d", "7d", "14d", "30d"].map((day) => (
          <TouchableOpacity
            key={day}
            onPress={() => setValidity(day)}
            className={`w-[22%] py-3 rounded-xl items-center border
            ${validity === day ? "bg-blue-600 border-blue-600" : "bg-white border-gray-300"}`}
          >
            <Text className={`${validity === day ? "text-white" : "text-black"} font-semibold`}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}

      </View>

      <Text className="font-semibold mb-2">Upload Proof (Optional)</Text>

      <TouchableOpacity
        onPress={pickImage}
        className="bg-white border border-dashed border-gray-400  rounded-xl py-6 items-center"
      >
        {proof ? (
          <Image
            source={{ uri: proof }}
            className="w-full h-60 rounded-xl"
            resizeMode="cover"
          />
        ) : (
          <Text className="text-gray-500 center items-center justify-center">Tap to upload screenshot / proof</Text>
        )}
      </TouchableOpacity>

    <TouchableOpacity className="bg-green-600 py-4 rounded-xl mb-6 mt-8">
        <Text className="text-white text-center font-bold text-lg">
          Post Bundle for Sale
        </Text>
    </TouchableOpacity>
    </View>
  );
}
