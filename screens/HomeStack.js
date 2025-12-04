import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import BundleDetails from '../components/smallscreens/BundleDetails';
import Checkout from '../components/smallscreens/Checkout';
import LoginSignup from '../components/smallscreens/Auth';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="BundleDetails" component={BundleDetails} />
      <Stack.Screen name='Checkout' component={Checkout}/>
      <Stack.Screen name='Login' component={LoginSignup}/>
    </Stack.Navigator>
  );
}