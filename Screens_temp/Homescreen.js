import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BrowseBundleContainer from "../components/ui/BrowseBundleContainer";
import BundleCards from "../components/ui/BundleCards";

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
