import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  ToastAndroid,
} from "react-native";
// import Imageprofile from '../../public/temp/profile.png'
import global from "../../../../global/global";
import getToken from "../../../../global/getToken";
import { CommonActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { connect } from "react-redux";
import userServices from "../../../api/userServices";
import colors from "../Store/colors";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    global.onSignIn = (user) => {
      console.log("Bên Menu");
      this.onSignIn(user);
    };
  }

  async componentDidMount() {
    let token = await getToken();
    if (token) {
      console.log("Token dang luu trong local:", token);
      let data = await userServices.checkToken(token);
      global.onSignIn(data);
      this.props.signIn(data);
    }
  }
  onSignIn(user) {
    this.setState({ user: user });
  }

  async onSignOut() {
    let token = await getToken();
    await AsyncStorage.removeItem("@token");
    let token1 = await getToken();
    console.log("token1:", token);
    console.log("token2:", token1);
    this.setState({ user: null });
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: "MAIN" },
          // {
          //   name: 'Profile',
          //   params: { user: 'jane' },
          // },
        ],
      })
    );
  }

  gotoChangeInfo = () => {
    this.props.navigation.push("CHANGE_INFO");
  };
  gotoOderHistory = () => {
    this.props.navigation.push("ORDER_HISTORY");
  };
  gotoChangePassword = () => {
    this.props.navigation.push("CHANGE_PASSWORD");
  };
  gotoAuthentication = () => {
    this.props.navigation.push("AUTHENTICATION");
  };

  noExited = () => {
    ToastAndroid.show(
      "Tính năng đang trong giai đoạn phát triển",
      ToastAndroid.LONG
    );
  };

  render() {
    const { container, profile, btnStyle, btnText, btnSignInStyle } = styles;
    const user = this.state.user;
    let image =
      this.props.reduxState.signIn &&
      this.props.reduxState.signIn.userInfo.avatar;
    // if (user) {
    //   console.log(user.userInfo.name);
    // }
    const textContent =
      "Ứng dụng tìm kiếm sản phẩm\nvà đặt hàng dành cho khách hàng\ncủa tập đoàn 小 明 先 生.";

    console.log("this props contect:", this.props.reduxState);
    const logoutJSX = (
      <View style={styles.logutContainer}>
        <Text style={styles.logoutTitle}>Đăng Nhập Để Tiếp Tục</Text>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => this.props.reduxState.history.push("SIGN_IN")}
        >
          <Text style={styles.btnStyle}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    );

    const loginJSX = (
      <SafeAreaView style={styles.loginContainer}>
        {/* <Text style={styles.title}>Trang cá nhân</Text> */}
        <ScrollView>
          <View style={styles.userInfoSection1}>
            <Image
              source={{
                uri: `http://192.168.138.6:8081/image/${image}`,
              }}
              style={styles.profile}
            />
            <View style={styles.name_account}>
              <Text style={styles.txt_account}>
                {/* {user && user.userInfo && user.userInfo.name} */}
                {this.props.reduxState.signIn &&
                  this.props.reduxState.signIn.userInfo.name}
              </Text>
              {/* <Text style={styles.Text}>
                {this.props.reduxState.signIn &&
                  this.props.reduxState.signIn.userInfo.email}
              </Text> */}
              <View style={styles.online_view}>
                <View style={styles.online_status}></View>
                <Text style={styles.Text}>Đang hoạt động</Text>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection2}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#333" size={18} />
              <Text
                style={{ color: "#333", marginLeft: 10, fontWeight: "500" }}
              >
                {this.props.reduxState.signIn &&
                  this.props.reduxState.signIn.userInfo.address}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#333" size={18} />
              <Text
                style={{ color: "#333", marginLeft: 10, fontWeight: "500" }}
              >
                {this.props.reduxState.signIn &&
                  this.props.reduxState.signIn.userInfo.phone}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#333" size={18} />
              <Text
                style={{ color: "#333", marginLeft: 10, fontWeight: "500" }}
              >
                {this.props.reduxState.signIn &&
                  this.props.reduxState.signIn.userInfo.email}
              </Text>
            </View>
          </View>

          {/* <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox]}>
              <Text style={styles.mainTxt}>1.520.000 Đ</Text>
              <Text style={styles.txtWallet}>Ví tiền</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.mainTxt}>25</Text>
              <Text style={styles.txtWallet}>Đơn đã đặt</Text>
            </View>
          </View> */}

          <View style={styles.menuWrapper}>
            <Text style={styles.sub_menu}>Tính năng</Text>
            <TouchableOpacity onPress={() => this.gotoOderHistory()}>
              <View style={styles.menuItem}>
                <MaterialIcons
                  name="history"
                  color={colors.primary}
                  size={24}
                  style={styles.icon_menu}
                />
                <Text style={styles.menuItemText}>Lịch sử đặt hàng</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={26}
                  color="black"
                  style={styles.icon_right}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.gotoChangeInfo()}>
              <View style={styles.menuItem}>
                <MaterialIcons
                  name="update"
                  size={24}
                  color={colors.primary}
                  style={styles.icon_menu}
                />
                <Text style={styles.menuItemText}>Cập nhật thông tin</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={26}
                  color="black"
                  style={styles.icon_right}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.gotoChangePassword()}
              style={{ marginBottom: 8 }}
            >
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="key-change"
                  color={colors.primary}
                  size={24}
                  style={styles.icon_menu}
                />
                <Text style={styles.menuItemText}>Thay đổi mật khẩu</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={26}
                  color="black"
                  style={styles.icon_right}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.sub_menu}>Nâng cao</Text>
            <TouchableOpacity onPress={() => this.noExited()}>
              <View style={styles.menuItem}>
                <MaterialIcons
                  name="help"
                  color={colors.primary}
                  size={24}
                  style={styles.icon_menu}
                />
                <Text style={styles.menuItemText}>Trung tâm trợ giúp</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={26}
                  color="black"
                  style={styles.icon_right}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.noExited()}>
              <View style={styles.menuItem}>
                <MaterialIcons
                  name="add-link"
                  color={colors.primary}
                  size={24}
                  style={styles.icon_menu}
                />
                <Text style={styles.menuItemText}>Liên kết tài khoản</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={26}
                  color="black"
                  style={styles.icon_right}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.logout_button}>
            <TouchableOpacity onPress={() => this.onSignOut()}>
              <Text style={styles.logout_text}>Thoát tài khoản</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.version}>Phiên bản: 18.0.1.v215</Text>
        </ScrollView>
      </SafeAreaView>
    );
    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    // const mainJSX = logoutJSX
    console.log("State user của Menu: ", this.state.user);
    // let image = user && user.userInfo && user.userInfo.avatar;
    return (
      <View style={styles.mainContainer}>
        {mainJSX}
        {/* {loginJSX} */}
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5, // thuộc tính elevation dành cho Android
  },

  profile: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginLeft: "auto",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5, // thuộc tính elevation dành cho Android
  },
  name_account: {
    marginRight: "auto",
    marginBottom: 8,
    marginTop: -60,
  },

  txt_account: {
    fontSize: 26,
    fontWeight: "500",
  },

  logoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btnStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  logoutTitle: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 24,
    fontWeight: "500",
  },
  logoutBtn: {
    // backgroundColor: "#1F41BB",
    backgroundColor: colors.primary,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    borderRadius: 10,
    shadowColor: "#1F41BB",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  loginContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f1f4ff",
    // backgroundColor: "#eee",
  },
  title: {
    color: "#ff7f24",
    fontSize: 28,
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 100,
  },
  userInfoSection1: {
    paddingHorizontal: 30,
    paddingVertical: 4,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  userInfoSection2: {
    paddingHorizontal: 30,
    paddingVertical: 4,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
  },
  online_view: {
    marginTop: 4,
    flexDirection: "row",
  },
  online_status: {
    width: 8,
    height: 8,
    backgroundColor: "green",
    marginRight: 4,
    borderRadius: 50,
    position: "relative",
    top: 5,
  },
  Text: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    fontStyle: "italic",
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 2,
    borderTopColor: "#dddddd",
    borderTopWidth: 2,
    flexDirection: "row",
    height: 80,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#dddddd",
    borderRightWidth: 2,
  },
  menuWrapper: {
    marginTop: 14,
  },
  sub_menu: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
    marginTop: -6,
  },
  menuItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
    borderTopColor: "#ccc",
    borderTopWidth: 0.5,
    marginBottom: 3,
  },
  menuItemText: {
    color: "#555555",
    marginLeft: 14,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 30,
  },
  icon_menu: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  icon_right: {
    marginLeft: "auto", // Đẩy phần tử này sang bên phải
    // justifyContent: "flex-end",
    color: "#333",
  },
  logout_button: {
    width: "32%",
    height: 36,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  logout_text: {
    fontSize: 12,
    color: colors.primary,
    textAlign: "center",
    lineHeight: 32,
    textTransform: "uppercase",
  },
  txt: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 6,
  },
  txtWallet: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 6,
  },
  mainTxt: {
    fontWeight: "600",
    marginBottom: -6,
  },

  version: {
    marginTop: 20,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "300",
  },
});
