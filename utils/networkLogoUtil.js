import { Image } from "react-native";

const AIRTEL_LOGO = require("../assets/images/airtellogo.png");
const TNM_LOGO = require("../assets/images/tnmlogo.png");

export function getNetworkLogo(network) {
  if (network.toLowerCase() === "airtel") {
    return <Image source={AIRTEL_LOGO} className="w-10 h-10" resizeMode="contain" />;
  }
  if (network.toLowerCase() === "tnm") {
    return <Image source={TNM_LOGO} className="w-10 h-10" resizeMode="contain" />;
  }

  return <Image source={AIRTEL_LOGO} className="w-10 h-10 opacity-30" resizeMode="contain" />;
}