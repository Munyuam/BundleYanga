import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Feather from "@react-native-vector-icons/feather";

const transactionData = [
  {
    id: 1,
    title: "2GB Airtel Bundle",
    date: "Nov 23, 2025 · 14:30",
    amount: "-K1,500",
    type: "out",
  },
  {
    id: 2,
    title: "Sold 5GB TNM Bundle",
    date: "Nov 22, 2025 · 09:15",
    amount: "+K3,200",
    type: "in",
  },
  {
    id: 3,
    title: "Top Up via Airtel Money",
    date: "Nov 20, 2025 · 16:45",
    amount: "+K10,000",
    type: "in",
  },
  {
    id: 4,
    title: "1GB Airtel Bundle",
    date: "Nov 19, 2025 · 11:20",
    amount: "-K900",
    type: "out",
  },
];

export default function WalletTransactionCard() {
  return (
    <View className="bg-gray-100 p-5">

      {/* QUICK TOP UP */}
      <Text className="text-lg font-bold mb-4">
        Quick Top Up
      </Text>

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

      <Text className="text-lg font-bold mb-4">
        Transaction History
      </Text>

      {transactionData.map((item) => (
        <View
          key={item.id}
          className="bg-white rounded-xl p-4 mb-4 flex-row items-center justify-between shadow"
        >
          
          <View className="flex-row items-center">

            <View
              className={`w-12 h-12 rounded-xl items-center justify-center
              ${item.type === "in" ? "bg-green-100" : "bg-red-100"}`}
            >
              <Feather
                name={item.type === "in" ? "arrow-up-right" : "arrow-down-left"}
                size={20}
                color={item.type === "in" ? "green" : "red"}
              />
            </View>

            <View className="ml-3">
              <Text className="font-semibold">{item.title}</Text>
              <Text className="text-gray-500 text-sm">{item.date}</Text>
            </View>

          </View>

          <Text
            className={`font-bold
            ${item.type === "in" ? "text-green-600" : "text-red-600"}`}
          >
            {item.amount}
          </Text>
        </View>
      ))}
    </View>
  );
}
