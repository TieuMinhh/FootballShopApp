import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#20315f",
            marginTop: 50,
          }}
        >
          Xiao Shop
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Gaming
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        /> */}
        <Image
          source={require("../assets/images/xiaoming.jpg")}
          style={{
            width: 300,
            height: 300,
            borderRadius: 50,
            transform: [{ rotate: "-5deg" }],
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#6ec2f7",
          padding: 20,
          width: "90%",
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Let's Begin
        </Text>
        <MaterialIcons name={"arrow-forward-ios"} size={22} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
