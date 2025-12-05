import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchCard from "../components/ui/SearchCard";

export default function SearchScreen(){
    return (
        <SafeAreaView>
            <ScrollView>
                <SearchCard/>
            </ScrollView>
        </SafeAreaView>
    )
}