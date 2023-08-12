import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// import LoginSVG from "../assets/images/misc/login.svg";
// import GoogleSVG from "../assets/images/misc/google.svg";
// import FacebookSVG from "../assets/images/misc/facebook.svg";
// import TwitterSVG from "../assets/images/misc/twitter.svg";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginTop: 50 }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          {/* <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
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
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
            marginTop: 30,
            textAlign: "center",
          }}
        >
          Đăng nhập
        </Text>
        <InputField
          label={"Email"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 4 }}
            />
          }
          keyboardType="email-address"
        />
        <InputField
          label={"Mật khẩu"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 1 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Quên mật khẩu?"}
          fieldButtonFunction={() => {}}
        />
        <CustomButton label={"Đăng nhập"} onPress={() => {}} />
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Hoặc đăng nhập bằng
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <GoogleSVG height={24} width={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <FacebookSVG height={24} width={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            {/* <TwitterSVG height={24} width={24} /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
              {" "}
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
