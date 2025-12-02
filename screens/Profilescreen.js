import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/ui/ProfileCard";
import MyListingsAndHistory from "../components/ui/MyListingAndHistory";
import Settings from "../components/ui/Settings";

export default function Profilescreen(){
    return (
        <SafeAreaView>
           <ScrollView>
                <ProfileCard/>
                <MyListingsAndHistory/>
                <Settings/>
           </ScrollView>
        </SafeAreaView>
    )
}