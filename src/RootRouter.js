import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();
import BottomNavigation from './BottomNavigation';
import ForgotPasswordScreen from './screens/Auth/ForgotPasswordScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import OtpScreen from './screens/Auth/OtpScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import DetailJobScreen from './screens/DetailJob/DetailJobScreen';

function RootRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="root" component={BottomNavigation} />
      <Stack.Screen name="Detail" component={DetailJobScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

export default RootRouter;
