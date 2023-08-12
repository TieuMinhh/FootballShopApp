import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../components/CustomDrawer";

import Ionicons from "react-native-vector-icons/Ionicons";

import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";

import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
// import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Trang chủ"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Trang cá nhân"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Thay đổi thông tin"
        component={MessagesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Thay đổi mật khẩu"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="checkmark-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lịch sử đặt hàng"
        component={AuthStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
