import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import getToken from "../../global/getToken";
import InputField from "../Customs/InputField";
import Button from "../Customs/Button";
export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordOld: "",
      password1: "",
      password2: "",
    };
  }
  quayLai = () => {
    this.props.navigation.goBack();
  };

  goBackHome = () => {
    this.props.navigation.popToTop();
  };

  handleCapNhatMatKhau = async () => {
    const { passwordOld, password1, password2 } = this.state;
    let token = await getToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let res = await axios.post(
      "http://192.168.138.6:8081/api/v1/changepassword",
      {
        oldPassword: passwordOld,
        newPassword: password1,
        newPassword2: password2,
      }
    );
    ToastAndroid.show("Thay đổi mật khẩu thành công", ToastAndroid.LONG);

    this.setState({
      passwordOld: "",
      password1: "",
      password2: "",
    });

    console.log("APi mat khua:", res.data);
  };

  render() {
    const { passwordOld, password1, password2 } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: "center" }}>
            {/* <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          /> */}
            <Image
              source={require("../../assets/images/xiaoming.jpg")}
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
            Thay đổi mật khẩu
          </Text>
          <InputField
            label={"Nhập mật khẩu cũ"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5, marginTop: 4 }}
              />
            }
            value={passwordOld}
            onChangeText={(text) => this.setState({ passwordOld: text })}
            inputType="password"
          />

          <InputField
            label={"Nhập mật khẩu mới"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5, marginTop: 4 }}
              />
            }
            value={password1}
            onChangeText={(text) => this.setState({ password1: text })}
            inputType="password"
          />

          <InputField
            label={"Nhập lại mật khẩu"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5, marginTop: 4 }}
              />
            }
            value={password2}
            onChangeText={(text) => this.setState({ password2: text })}
          />

          <Button
            label={"Cập nhật"}
            onPress={() => this.handleCapNhatMatKhau()}
            // onPress={() => this.props.reduxState.history.push("MAIN")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
  goBack: {
    flexDirection: "row",
    marginLeft: -4,
  },
  backText: {
    fontSize: 18,
    marginLeft: -2,
  },
  goBackHome: {
    marginLeft: "66%",
    marginTop: -6,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 16,
    // marginTop: -80,
  },
  brandName: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1F41BB",
    opacity: 0.9,
    marginBottom: 16,
  },

  input: {
    backgroundColor: "#f1f4ff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },

  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  loginBtn: {
    backgroundColor: "#1F41BB",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderRadius: 10,
    shadowColor: "#1F41BB",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  forgotPassText: {
    color: "#1F41BB",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },

  socialLogin: {
    color: "#1F41BB",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },

  listLogoLogin: {
    flexDirection: "row",
    justifyContent: "center",
  },

  logoItem: {
    padding: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    marginHorizontal: 6,
  },

  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    flexDirection: "row",
  },
  footerText: {
    color: "#666666",
    fontWeight: "bold",
  },
  signupBtn: {
    color: "#1F41BB",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  wFull: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
