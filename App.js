import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import TabNavigator from "./src/navigation/TabNavigator";

function App() {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
