import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SellBundleCard from "../components/ui/sellBundleCard";

export default function SellScreen(){
    return (
        <SafeAreaView>
           <ScrollView>
             <SellBundleCard/> 
            </ScrollView>   
        </SafeAreaView>
    )
}