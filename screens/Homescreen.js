import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BrowseBundleContainer from "../components/BrowseBundleContainer";
import BundleCards from "../components/BundleCards";

export default function Homescreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BrowseBundleContainer/>
        <BundleCards/>
      </ScrollView>
    </SafeAreaView>
  );
}
