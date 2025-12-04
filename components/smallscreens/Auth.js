import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView>
     
      <View className="px-6 pt-12">
          
        <Text className="text-4xl font-bold text-center text-gray-900">
          Heyyy You!
        </Text>
        <Text className="text-lg text-gray-500 text-center mt-2 mb-10">
          Sign in to continue
        </Text>

        <View className="relative flex-row justify-center mb-10">
          <TouchableOpacity
            onPress={() => setActiveTab("login")}
            className="px-10 py-3"
          >
            <Text
              className={`text-xl font-semibold ${
                activeTab === "login" ? "text-blue-600" : "text-gray-400"
              }`}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("signup")}
            className="px-10 py-3"
          >
            <Text
              className={`text-xl font-semibold ${
                activeTab === "signup" ? "text-blue-600" : "text-gray-400"
              }`}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            className="absolute bottom-0 h-1 w-20 bg-blue-600 rounded-full"
            style={{
              transform: [{ translateX: activeTab === "login" ? -65 : 60 }],
            }}
          />
        </View>

        <View className="space-y-6">
          <View>
            <Text className="text-gray-600 mb-2">Phone Number</Text>
            <View className="relative">
              <MaterialIcons
                name="phone"
                size={22}
                color="#9CA3AF"
                style={{ position: "absolute", left: 16, top: 16, zIndex: 10 }}
              />
              <TextInput
                className="pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-base"
                placeholder="+265 888 123 456"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {activeTab === "login" ? (
            <>
              <View>
                <Text className="text-gray-600 mb-2">Password</Text>
                <View className="relative">
                  <MaterialIcons
                    name="lock-outline"
                    size={22}
                    color="#9CA3AF"
                    style={{ position: "absolute", left: 16, top: 16, zIndex: 10 }}
                  />
                  <TextInput
                    className="pl-14 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-base"
                    placeholder="Enter your password"
                    secureTextEntry
                  />
                  <TouchableOpacity style={{ position: "absolute", right: 16, top: 16 }}>
                    <MaterialIcons name="visibility-off" size={22} color="#9CA3AF" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity className="items-end mb-6 mt-2">
                <Text className="text-blue-600 font-medium">Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-blue-600 py-4 rounded-2xl shadow-md">
                <Text className="text-white text-center text-lg font-semibold">
                  Login
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View>
                <Text className="text-gray-600 mb-2">Email</Text>
                <View className="relative">
                  <Ionicons
                    name="mail-outline"
                    size={22}
                    color="#9CA3AF"
                    style={{ position: "absolute", left: 16, top: 16, zIndex: 10 }}
                  />
                  <TextInput
                    className="pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-base"
                    placeholder="your@email.com"
                    keyboardType="email-address"
                  />
                </View>
              </View>

               <View>
                <Text className="text-gray-600 mb-2">Password</Text>
                <View className="relative">
                  <MaterialIcons
                    name="lock-outline"
                    size={22}
                    color="#9CA3AF"
                    style={{ position: "absolute", left: 16, top: 16, zIndex: 10 }}
                  />
                  <TextInput
                    className="pl-14 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-base"
                    placeholder="Enter your password"
                    secureTextEntry
                  />
                </View>
              </View>

              <Text className="text-gray-500 text-left text-sm mt-2 mb-4">
                We'll send you an OTP to verify
              </Text>

              <TouchableOpacity className="bg-blue-600 py-4 rounded-2xl shadow-md">
                <Text className="text-white text-center text-lg font-semibold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </>
          )}

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="px-4 text-gray-500 font-medium">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          <TouchableOpacity className="flex-row items-center justify-center bg-white shadow-md border-2 border-gray-200 mb-6 py-4 rounded-2xl">
            <Image
              source={{ uri: "https://www.google.com/favicon.ico" }}
              className="w-6 h-6 mr-3"
            />
            <Text className="text-gray-700 font-medium">Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}