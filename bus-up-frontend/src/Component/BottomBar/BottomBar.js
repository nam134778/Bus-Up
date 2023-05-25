import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomePage from "../../Screens/HomePage/HomePage";
import NotificationPage from "../../Screens/NotificationPage/NotificationPage";
import ChooseRouteScreen from "../../Screens/ChooseRouteScreen/ChooseRouteScreen";
import ListRouteScreen from "../../Screens/ListRouteScreen/ListRouteScreen";
import RoutingPage from "../../Screens/RoutingPage/RoutingPage";
import SettingScreen from '../../Screens/SettingScreen/SettingScreen';
import AccountSettingScreen from '../../Screens/AccountSettingScreen/AccountSettingScreen';

//Livingroom
const LivingroomStack = createStackNavigator();

export const LivingroomStackScreen = () => (
  <LivingroomStack.Navigator screenOptions={{ headerShown: false }}>
    <LivingroomStack.Screen name="LightListLivingroom" component={LightListLivingroom} />
    <LivingroomStack.Screen name="FanListLivingroom" component={FanListLivingroom} />
  </LivingroomStack.Navigator>
);

//Kitchen
const KitchenStack = createStackNavigator();

export const KitchenStackScreen = () => (
  <KitchenStack.Navigator screenOptions={{ headerShown: false }}>
    <KitchenStack.Screen name="LightListKitchen" component={LightListKitchen} />
    <KitchenStack.Screen name="FanListKitchen" component={FanListKitchen} />
  </KitchenStack.Navigator>
);


//Homescreen
const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <HomeStack.Screen name="Home" component={HomePage} />
    <HomeStack.Screen name="ChooseRouteScreen" component={ChooseRouteStackScreen} />
    <HomeStack.Screen name="ListRoute" component={ListRouteScreen} />
  </HomeStack.Navigator>
);
const ChooseRouteStack = createStackNavigator();

export const ChooseRouteStackScreen = () => (
  <ChooseRouteStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <ChooseRouteStack.Screen name="ChooseRoute" component={ChooseRouteScreen} />
    <ChooseRouteStack.Screen name="Routing" component={RoutingPage} />
  </ChooseRouteStack.Navigator>
);

//Setting
const SettingStack = createStackNavigator();

export const SettingStackScreen = () => (
  <SettingStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingStack.Screen name="Setting" component={SettingScreen} />
    <SettingStack.Screen name="AccountSetting" component={AccountSettingScreen} />
  </SettingStack.Navigator>
);


//Tab
const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#4ABE85' }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          ),
        }}
      />
      <Tab.Screen name="Static" component={HomePage}
        options={{
          tabBarLabel: 'Booking',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={29} />
          ),
        }}
      />
      <Tab.Screen name="Notiication" component={NotificationPage}
        options={{
          tabBarLabel: 'Noti',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications-none" color={color} size={29} />
          ),
        }} />
      <Tab.Screen name="SettingTab" component={SettingStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={29} />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default BottomBar;