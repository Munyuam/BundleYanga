import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function LoginSignup() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Welcome Back</Text>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>Sign in to continue</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => setActiveTab('login')}>
          <Text style={{ marginHorizontal: 20, fontWeight: activeTab === 'login' ? 'bold' : 'normal' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('signup')}>
          <Text style={{ marginHorizontal: 20, fontWeight: activeTab === 'signup' ? 'bold' : 'normal' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'login' ? (
        <View>
          <Text>Phone Number</Text>
          {/* Input fields go here */}
          <Text>Password</Text>
          {/* Input fields go here */}
        </View>
      ) : (
        <View>
          <Text>Phone Number</Text>
          {/* Input fields go here */}
          <Text>Email (Optional)</Text>
          {/* Input fields go here */}
        </View>
      )}
    </View>
  );
}
