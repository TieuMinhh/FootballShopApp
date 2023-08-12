import React, { useState } from "react";
import axios from "axios";
import {
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
const { height, width } = Dimensions.get("window");

export default function DetailProduct() {
  const [productInfo, setProductInfo] = useState([]);
  const [size, setSize] = useState(0);
  const [priceSize, setPriceSize] = useState(0);
  const [status, setStatus] = useState("");
  const [sizeSML, setSizeSML] = useState(0);
  const [quantity, setQuantity] = useState(0);

  async function getProduct() {
    // const result = await axiosApiInstance.get(
    //   axiosApiInstance.defaults.baseURL + "/api/v1/category?id=ALL"
    // );
    let result = await axios.get(
      `http://192.168.1.5:8081/api/v1/chiTiet?id=21`
    );
    setProductInfo(result?.data.listProduct);
    // console.log(result.data);
  }

  const PickSize = (size, priceSize, sizeSML, status) => {
    setStatus(status);
    setSizeSML(sizeSML);
    setSize(size);
    setPriceSize(priceSize);
  };

  handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <>
      {productInfo && productInfo[0] && (
        <>
          <ScrollView style={{ backgroundColor: "#000" }}>
            <SafeAreaView>
              <ImageBackground
                source={{
                  uri: `http://192.168.1.5:8081/image/${productInfo[0].images}`,
                }}
                style={styles.imgbg}
                imageStyle={{
                  borderRadius: 10 * 3,
                }}
              >
                <View style={styles.viewhd}>
                  <TouchableOpacity
                    style={styles.buttonhd}
                    // onPress={() => this.quayLai()}
                  >
                    <Ionicons
                      name="return-up-back"
                      color="#b5b5b5"
                      size={10 * 2.5}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonhd}
                    // onPress={() => this.props.navigation.push("CART")}
                  >
                    <Ionicons name="cart" color="#b5b5b5" size={10 * 2.5} />
                  </TouchableOpacity>
                </View>

                <View style={styles.viewbt}>
                  <BlurView intensity={80} tint="dark" style={styles.blurview}>
                    <View>
                      <Text style={styles.nametext}>{productInfo[0].name}</Text>
                      <Text style={styles.inclutext}>
                        {productInfo[0].price + sizeSML} đ
                      </Text>
                    </View>
                  </BlurView>
                </View>
              </ImageBackground>

              <View style={styles.viewbd}>
                <Text style={styles.destext}>Mô Tả</Text>
                <Text numberOfLines={3} style={styles.desc}>
                  {productInfo[0].detail}
                </Text>
                <View style={styles.viewsize}>
                  <Text style={styles.sizetext}>Size</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      style={
                        status == 1 ? styles.activeSize : styles.buttonsize
                      }
                      onPress={() => PickSize(360, priceSize + 0, 0, 1)}
                    >
                      <Text
                        style={[
                          status == 1 ? styles.activeText : styles.fonetext,
                        ]}
                      >
                        S
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        status == 2 ? styles.activeSize : styles.buttonsize
                      }
                      onPress={() => PickSize(500, priceSize + 5000, 5000, 2)}
                    >
                      <Text
                        style={[
                          status == 2 ? styles.activeText : styles.fonetext,
                        ]}
                      >
                        M
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        status == 3 ? styles.activeSize : styles.buttonsize
                      }
                      onPress={() => PickSize(700, priceSize + 10000, 10000, 3)}
                    >
                      <Text
                        style={[
                          status == 3 ? styles.activeText : styles.fonetext,
                        ]}
                      >
                        L
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* SỐ LƯỢNG */}
                <Text style={styles.sizetext}>Số Lượng</Text>
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button_size}
                    // onPress={this.handleDecrement}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantity}</Text>
                  <TouchableOpacity
                    style={styles.button_size}
                    // onPress={this.handleIncrement}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
          <SafeAreaView style={styles.safefoot}>
            <View style={styles.cart_view}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => handleAddGioHang()}
              >
                <FontAwesome5
                  name="cart-plus"
                  color="#b5b5b5"
                  size={10 * 3.2}
                />
                <Text style={styles.cart_text}>Giỏ hàng</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buy_view}>
              <Text style={styles.buy_text}>Mua ngay</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imgbg: {
    height: height / 2.5 + 10 * 2,
    justifyContent: "space-between",
  },
  viewhd: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10 * 2,
    paddingTop: 35,
  },
  buttonhd: {
    backgroundColor: "#0C0F14",
    padding: 10,
    borderRadius: 10 * 1.5,
    position: "relative",
    top: -12,
  },

  viewbt: {
    borderRadius: 10 * 3,
    overflow: "hidden",
  },
  blurview: {
    padding: 10 * 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nametext: {
    fontSize: 10 * 2,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },
  inclutext: {
    fontSize: 10 * 1.8,
    color: "#b5b5b5",
    fontWeight: "500",
    marginBottom: 12,
  },
  viewbd: {
    padding: 10,
  },
  destext: {
    color: "#b5b5b5",
    fontSize: 10 * 1.7,
    marginBottom: 10,
    marginTop: 10,
  },
  desc: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  viewsize: {
    marginVertical: 10 * 0.8,
  },
  activeSize: {
    borderColor: "#D17842",
    backgroundColor: "#0C0F14",
    borderWidth: 2,
    paddingVertical: 10 / 2,
    borderRadius: 10,
    width: width / 3 - 10 * 2,
    alignItems: "center",
  },
  activeText: {
    fontSize: 10 * 1.9,
    color: "#D17842",
  },
  sizetext: {
    color: "#b5b5b5",
    fontSize: 10 * 1.7,
    marginTop: 10,
    marginBottom: 14,
  },
  buttonsize: {
    borderWidth: 2,
    paddingVertical: 10 / 2,
    borderRadius: 10,
    backgroundColor: "#2E333E",
    width: width / 3 - 10 * 2,
    alignItems: "center",
  },
  fonetext: {
    color: "#b5b5b5",
    fontSize: 10 * 1.9,
  },
  safefoot: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cart_view: {
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10 * 3.6,
    paddingBottom: -24,
  },
  buy_view: {
    marginRight: 12,
    backgroundColor: "#D17842",
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 50,
  },
  cart_text: {
    color: "#fff",
    fontSize: 10 * 1.8,
    fontWeight: "500",
    marginLeft: 6,
    marginTop: 4,
  },
  buy_text: {
    color: "#fff",
    fontSize: 10 * 2,
    fontWeight: "600",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderColor: "gray",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 8,
    padding: 5,
    width: 123,
    height: 50,
    borderWidth: 0,
  },
  button_size: {
    backgroundColor: "#2E333E",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    // fontFamily: 'Rosarivo-Regular',
    // fontStyle: 'normal'
  },
});
