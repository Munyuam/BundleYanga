import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WalletCard from "../components/ui/walletcard";
import WalletTransactionCard from "../components/ui/transactionsCard";


export default function WalletScreen(){
    return (
        <SafeAreaView>
            <ScrollView>
                <WalletCard/>
                <WalletTransactionCard/>
            </ScrollView>
        </SafeAreaView>
    )
}