import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  { createNativeStackNavigator }from '@react-navigation/native-stack';
import OnboardingScreen from './src/Screens/OnboardingPage/onboardingScreen';
import LoginScreen from './src/Screens/AuthenticationPage/loginScreen';
import ForgotPassScreen from './src/Screens/AuthenticationPage/forgetPassScreen';
import SendOTPScreen from './src/Screens/AuthenticationPage/sendOTPScreen';
import ResetPasswordScreen from './src/Screens/AuthenticationPage/resetPasswordScreen';
import RegisterScreen from './src/Screens/AuthenticationPage/registerScreen';
import ChooseRouteScreen from './src/Screens/ChooseRouteScreen/ChooseRouteScreen';
import ListRouteScreen from './src/Screens/ListRouteScreen/ListRouteScreen';
import BottomBar from './src/Component/BottomBar/BottomBar';
import React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppStack = createStackNavigator();
const Stack =  createNativeStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



export default function App() {
  // const [firstLaunch, setFirstLaunch] = useState();
  // useEffect(() => {
  //   async function setData() {
  //     const appData = await AsyncStorage.getItem("appLaunched");
  //     if (appData == null) {
  //       setFirstLaunch(true);
  //       AsyncStorage.setItem("appLaunched", "false");
  //     } else {
  //       setFirstLaunch(false);
  //     }
  //   }
  //   setData();
  // }, []);
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SendOTP" component={SendOTPScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Bottom" component={BottomBar} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});