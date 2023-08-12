import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import DatePicker from "react-native-date-picker";

import InputField from "../components/InputField";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// import RegistrationSVG from "../assets/images/misc/registration.svg";
// import GoogleSVG from "../assets/images/misc/google.svg";
// import FacebookSVG from "../assets/images/misc/facebook.svg";
// import TwitterSVG from "../assets/images/misc/twitter.svg";
import CustomButton from "../components/CustomButton";

const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState("Ngày sinh");

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginTop: 30 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          {/* <RegistrationSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
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
          Đăng ký
        </Text>

        <InputField
          label={"Họ tên"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 1 }}
            />
          }
        />

        <InputField
          label={"Email"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 1 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Số điên thoại"}
          icon={
            <Ionicons
              name="call-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 1 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Địa chỉ"}
          icon={
            <Ionicons
              name="cellular-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 3 }}
            />
          }
          inputType="password"
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
        />

        <InputField
          label={"Xác nhận mật khẩu"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5, marginTop: 1 }}
            />
          }
          inputType="password"
        />

        {/* <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{ color: "#666", marginLeft: 5, marginTop: 5 }}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* <DatePicker
          modal
          open={open}
          date={date}
          mode={"date"}
          maximumDate={new Date("2005-01-01")}
          minimumDate={new Date("1980-01-01")}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}

        <CustomButton label={"Đăng ký"} onPress={() => {}} />

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Hoặc đăng ký bằng
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
          <Text>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{ color: "#AD40AF", fontWeight: "700", marginLeft: 4 }}
            >
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
