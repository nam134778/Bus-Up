import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/OnboardingPage/onboardingScreen';
import LoginScreen from './src/AuthenticationPage/loginScreen';
import ForgotPassScreen from './src/AuthenticationPage/forgetPassScreen';
import SendOTPScreen from './src/AuthenticationPage/sendOTPScreen';
import ResetPasswordScreen from './src/AuthenticationPage/resetPasswordScreen';
import RegisterScreen from './src/AuthenticationPage/registerScreen';
import React from 'react';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppStack = createStackNavigator();

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
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AppStack.Screen name="SendOTP" component={SendOTPScreen} />
      <AppStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <AppStack.Screen name="Register" component={RegisterScreen} />
      <AppStack.Screen  options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }} name="ForgotPass" component={ForgotPassScreen} />
      <AppStack.Screen name="Login" 
       options={{
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
      component={LoginScreen} />
    </AppStack.Navigator>
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
