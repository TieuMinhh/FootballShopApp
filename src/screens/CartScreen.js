import React, { Component } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
// import global from "../../../../global/global";
import axios from "axios";
// import getToken from "../../../../global/getToken";
// import { checkToken } from "../../../api/userServices";
// import colors from "..//Store/colors";
import { BlurView } from "expo-blur";
// import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
// const { height, width } = Dimensions.get("window");
import { windowWidth, windowHeight } from "../utils/Dimensions";

// import { connect } from "react-redux";
import { Swipeable, RectButton } from "react-native-gesture-handler";

const CartScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={styles.headedCart}>
        <Text style={styles.headedName}>Giỏ hàng của bạn</Text>
      </View>

      <FlatList
        style={{ marginTop: -16 }}
        data={listCart}
        renderItem={({ item, index }) => (
          <BlurView tint="dark" intensity={95} style={styles.container}>
            <View style={styles.cartCheckbox}>
              <CheckBox
                style={{
                  alignSelf: "flex-start",
                }}
                // checked={this.state["checked" + index]}
                // onPress={() => this.handleCheckBox(index, item)}
                // checked={this.state.isChecked}
                // onPress={()=>this.toggleCheckbox(item.id_product)}
              />
            </View>

            <TouchableOpacity>
              <Image
                source={{
                  uri: `http://192.168.1.5:8081/image/${item.images}`,
                }}
                style={styles.cartImage}
              />
            </TouchableOpacity>

            <View style={{ padding: 14.6 }}>
              <Text style={styles.cartName}>{item.name}</Text>
              <Text style={styles.cartSize}>
                Size:
                <View>
                  <Text style={styles.cartSizeItem}>
                    {item.size == 360 ? "S" : item.size == 500 ? "M" : "L"}
                  </Text>
                </View>
              </Text>
              <Text style={styles.cartPrice}>{item.price_size} đ</Text>
              <View style={styles.cartQuantilyView}>
                <TouchableOpacity
                  style={styles.cartQuantilyButton}
                  // onPress={() => this.handleDecrement(item, index)}
                >
                  <Text style={styles.cartQuantilyText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.cartQuantily}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.cartQuantilyButton}
                  // onPress={() => this.handleIncrement(item, index)}
                >
                  <Text style={styles.cartQuantilyText}>+</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                // onPress={() => this.deleteCart(item.id_product, item.size)}
                style={styles.cartDelIcon}
              >
                <MaterialIcons name="delete" size={26} color="#ddd" />
              </TouchableOpacity>
            </View>
          </BlurView>
        )}
        keyExtractor={(item) => item.id}
      />

      <SafeAreaView style={styles.footer}>
        <View style={styles.footerCheckbox}>
          {/* <CheckBox
            checked={this.state.checkALL}
            onPress={() => this.handlePress()}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
          /> */}
          <Text style={styles.footerTotalName}>Tất cả</Text>
        </View>
        <Text style={styles.footerTotal}>Tổng: {tongTien} đ</Text>

        <TouchableOpacity
          style={styles.footerOrder}
          // onPress={() => this.handleThanhToan()}
        >
          <Text style={styles.footerOrderName}>Mua Hàng</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headedCart: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    backgroundColor: "#000",
    elevation: 1,
    bottom: 15,
  },
  headedName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
  },
  container: {
    width: "94%",
    alignSelf: "center",
    height: 120,
    backgroundColor: "#000",
    borderRadius: 10,
    elevation: 1,
    flexDirection: "row",
    margin: 6,
    position: "relative",
  },
  cartCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    right: 14,
    width: 36,
  },
  cartImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    position: "relative",
    top: 20,
    marginRight: 5,
  },
  cartName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  cartPrice: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 8,
  },
  cartSize: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 12,
  },
  cartSizeItem: {
    color: "#D17842",
    fontSize: 10 * 1.8,
    fontWeight: "500",
    position: "relative",
    top: 6,
    left: 4,
  },
  cartQuantilyView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0C0F14",
    borderRadius: 8,
    width: 76.6,
    height: 35,
    left: 150,
    bottom: 36,
  },
  cartQuantilyButton: {
    backgroundColor: "#D17842",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cartQuantilyText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  cartQuantily: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  cartDelIcon: {
    position: "relative",
    left: 205,
    bottom: 136,
  },
  footer: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
  },
  footerCheckbox: {
    flexDirection: "row",
    marginLeft: -10,
    marginTop: 10,
  },
  footerTotalName: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -12,
    marginTop: 16,
  },
  footerTotal: {
    color: "#fff",
    marginLeft: -2,
    marginTop: 24.8,
    fontSize: 10 * 1.6,
    fontWeight: "500",
  },
  footerOrder: {
    marginTop: 14,
    marginRight: 16,
    backgroundColor: "#D17842",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10 * 1.2,
    height: 44,
    width: 130,
  },
  footerOrderName: {
    color: "#fff",
    fontSize: 10 * 1.6,
    fontWeight: "600",
  },
});
