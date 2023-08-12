import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import GameDetailsScreen from "../screens/GameDetailsScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import ProductScreen from "../screens/ProductScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: "#945305",
        tabBarInactiveTintColor: "#222222",
        tabBarInactiveBackgroundColor: "#fff",
        tabBarActiveBackgroundColor: "#ddd",
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "green",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Sản phẩm"
        component={ProductScreen}
        options={{
          // tabBarBadge: 50,
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shirt-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Giỏ hàng"
        component={CartScreen}
        options={{
          tabBarBadge: 9,
          tabBarBadgeStyle: { backgroundColor: "red" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Ưa thích"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  // console.log(routeName);

  if (routeName == "GameDetails") {
    return "none";
  }
  return "flex";
};

export default TabNavigator;
