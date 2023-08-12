import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  SafeAreaView,
  Image,
  ToastAndroid,
} from "react-native";
// import getToken from "../../../../global/getToken";
// import userServices from "../../../api/userServices";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import axios from "axios";
import InputField from "../Customs/InputField";
import Button from "../Customs/Button";
class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      taiKhoan: "",
    };
  }

  async componentDidMount() {
    // let token = await getToken();
    // let data = await userServices.checkToken(token);
    console.log("This props: ", this.props.reduxState.signIn.userInfo);
    let taiKhoan = this.props.reduxState.signIn.userInfo;
    this.setState({
      name: taiKhoan.name,
      phone: taiKhoan.phone,
      address: taiKhoan.address,
      taiKhoan: taiKhoan,
    });
  }
  quayLai = () => {
    this.props.navigation.goBack();
  };

  goBackHome = () => {
    this.props.navigation.popToTop();
  };

  handleChangeInfo = async () => {
    const { name, phone, address, taiKhoan } = this.state;
    console.log(taiKhoan.id_account, name, phone, address);
    let acc = await axios.put(
      `http://192.168.138.6:8081/api/v1/modified/${taiKhoan.id_account}`,
      {
        name,
        phone,
        address,
      }
    );
    ToastAndroid.show("Cập nhật thông tin thành công", ToastAndroid.LONG);
    this.setState({
      name: name,
      phone: phone,
      address: address,
    });
    console.log(acc.data);
  };

  // handleTakePhoto = async () => {
  //   this.setState({
  //     setImage: "",
  //   });
  //   let result = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images, // chỉ chọn ảnh
  //     allowsEditing: true, // cho phép chỉnh sửa trước khi lưu ảnh
  //     aspect: [4, 3], // tỷ lệ khung hình
  //     quality: 1, // chất lượng ảnh (0-1)
  //   });
  //   if (!result.canceled) {
  //     // nếu không hủy việc chụp ảnh
  //     this.setState({ image: result.assets[0].uri }); // lưu đường dẫn của ảnh vào state
  //   }
  // };

  render() {
    const { name, phone, address, email, password, image } = this.state;

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
            Thay đổi thông tin cá nhân
          </Text>
          <InputField
            label={"Họ tên"}
            icon={
              <Ionicons
                name="person-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5, marginTop: 4 }}
              />
            }
            value={name}
            onChangeText={(text) => this.setState({ name: text })}
          />

          <InputField
            label={"Số diện thoại"}
            icon={
              <Ionicons
                name="call-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5, marginTop: 4 }}
              />
            }
            value={phone}
            onChangeText={(text) => this.setState({ phone: text })}
          />

          <InputField
            label={"Địa chỉ"}
            icon={
              <Ionicons
                name="cellular-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5, marginTop: 4 }}
              />
            }
            value={address}
            onChangeText={(text) => this.setState({ address: text })}
          />

          <Button
            label={"Cập nhật"}
            onPress={() => this.handleChangeInfo()}
            // onPress={() => this.props.reduxState.history.push("MAIN")}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
    marginTop: -80,
  },
  brandName: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1F41BB",
    opacity: 0.9,
    // marginTop: -10,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: "#666666",
    marginBottom: 16,
    fontWeight: "bold",
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
    marginTop: 24,
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
    marginBottom: 24,
  },
  quayLai: {},
});
