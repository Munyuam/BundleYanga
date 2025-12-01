import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Profilescreen from "./screens/Profilescreen";
import SellScreen from "./screens/Sellscreen";
import WalletScreen from "./screens/Walletscreen";
import "./global.css";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Homescreen/>
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Homescreen} />
          <Tab.Screen name="Login" component={Loginscreen} />
          <Tab.Screen name="Profile" component={Profilescreen} />
          <Tab.Screen name="Sell" component={SellScreen} />
          <Tab.Screen name="Wallet" component={WalletScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </SafeAreaView>
  );
}
