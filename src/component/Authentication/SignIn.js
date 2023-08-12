import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
} from "react-native";
// import Input from "./Input";
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import userServices from "../api/userServices";
import global from "../../global/global";
import saveToken from "../../global/saveToken";
import checkToken from "../../component/api/userServices";
import { connect } from "react-redux";
import axios from "axios";
import getToken from "../../global/getToken";

import Button from "../Customs/Button";
import InputField from "../Customs/InputField";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  quayLai = () => {
    this.props.navigation.goBack();
  };

  goBackHome = () => {
    this.props.navigation.popToTop();
  };

  onSignIn = async () => {
    console.log("Thử");
    console.log("email : ", email);
    const { email, password } = this.state;
    let data = await userServices.signIn(email, password);
    console.log(data);
    console.log("data:", data.userData);
    await saveToken(data.userData);
    data = await userServices.checkToken(data.userData);
    global.onSignIn(data);
    this.props.signIn(data);
    console.log("Data bên signIn:", data);
    //Cart
    let token = await getToken();
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // this.props.setTabBarBadge()
    let cart = await axios.post("http://192.168.138.6:8081/api/v1/account");
    this.props.arrGioHang(cart.data.list);
    //Cart
    // this.props.diDenMain();
    ToastAndroid.show("Đăng nhập thành công", ToastAndroid.LONG);
    this.props.reduxState.history.popToTop();
    // this.props.reduxState.history.push("MAIN");
  };

  render() {
    const { email, password } = this.state;
    console.log("Thí props: ", this.props);
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", marginTop: 50 }}
      >
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
            value={email}
            onChangeText={(text) => this.setState({ email: text })}
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
            fieldButtonFunction={() =>
              this.props.reduxState.history.push("FORGOT_PASSWORD")
            }
            value={password}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <Button label={"Đăng nhập"} onPress={() => this.onSignIn()} />
          <Text
            style={{ textAlign: "center", color: "#666", marginBottom: 20 }}
          >
            Hoặc đăng nhập bằng
          </Text>
          {/* <View
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
              <GoogleSVG height={24} width={24} />
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
              <FacebookSVG height={24} width={24} />
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
              <TwitterSVG height={24} width={24} />
            </TouchableOpacity>
          </View> */}
          <View style={styles.listLogoLogin}>
            <TouchableOpacity style={styles.logoItem}>
              <Ionicons name="logo-google" color="#6ec2f7" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoItem}>
              <Ionicons name="logo-facebook" color="#6ec2f7" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoItem}>
              <Ionicons name="logo-github" color="#6ec2f7" size={20} />
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
            <TouchableOpacity
              onPress={() => this.props.reduxState.history.push("SIGN_UP")}
            >
              <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
                {" "}
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxState: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    product: (id_product) =>
      dispatch({ type: "id_product", payload: id_product }),
    history: (history) => dispatch({ type: "history", payload: history }),
    arrGioHang: (arrGioHang) =>
      dispatch({ type: "arrCart", payload: arrGioHang }),
    signIn: (signIn) => dispatch({ type: "signin", payload: signIn }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

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
    fontSize: 40,
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
    marginBottom: 20,
  },

  logoItem: {
    padding: 10,
    // backgroundColor: "#ECECEC",
    borderRadius: 8,
    marginHorizontal: 20,
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
