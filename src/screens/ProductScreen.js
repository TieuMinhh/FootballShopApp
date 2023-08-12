import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
  FlatList,
} from "react-native";
import axios from "axios";

import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
// import ImageCoffee from "./coffees/mainn.jpg";
// import Search from "../Search/Search";
import { windowWidth } from "../utils/Dimensions";

export default function ProductScreen() {
  const [listCategory, setListCategory] = useState([]);
  const [change, setChange] = useState();
  const [statusCategory, setStatusCategory] = useState("");
  const [statusListProduct, setStatusListProduct] = useState([]);

  async function getListCategory() {
    // const result = await axiosApiInstance.get(
    //   axiosApiInstance.defaults.baseURL + "/api/v1/category?id=ALL"
    // );
    let result = await axios.get(
      `http://192.168.1.5:8081/api/v1/category?id=ALL`
    );
    setListCategory(result?.data.listCategory);
    // console.log(result.data);
  }

  const OnClickCategory = async (statusCategory, id_category) => {
    console.log(id_category);
    let result = await axios.get(
      `http://192.168.1.5:8081/api/v1/admin/product?id=${id_category}`
    );
    // console.log("id_category:", arrProduct.data.listProduct);
    setStatusCategory(statusCategory);
    setStatusListProduct(result?.data.listProduct);
  };

  useEffect(() => {
    getListCategory();
  }, [change]);

  return (
    <>
      {/* <Search handleTimKiem={(list) => this.handleTimKiem(list)} /> */}
      <View style={{ backgroundColor: "#000" }}>
        <Text style={styles.title}>Danh mục sản phẩm</Text>
        {/* Danh Mục */}
        <FlatList
          data={listCategory}
          horizontal={true}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.item}>
              <Text
                style={
                  statusCategory == index ? styles.textitemac : styles.textitem
                }
                onPress={() => OnClickCategory(index, item.id_category)}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ScrollView style={styles.viewContent}>
        {/* Danh Mục */}

        <View style={styles.bodyview}>
          {statusListProduct &&
            statusListProduct.map((item, index) => {
              return (
                <View style={styles.product}>
                  <BlurView tint="dark" intensity={95} style={styles.pad}>
                    <TouchableOpacity
                      style={styles.container}
                      onPress={() => this.diDenProductDetail(item.id_product)}
                    >
                      <Image
                        source={{
                          uri: `http://192.168.1.5:8081/image/${item.images}`,
                        }}
                        style={styles.img}
                      />
                    </TouchableOpacity>
                    <Text numberOfLines={3} style={styles.nametext}>
                      {item.name_product}
                    </Text>
                    <Text numberOfLines={3} style={styles.includedtext}>
                      {item.detail}
                    </Text>
                    <View style={styles.infoview}>
                      <View style={styles.priceview}>
                        <Text style={styles.pricetext}>
                          {item.price.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.add}
                        // onPress={() =>
                        //   this.diDenProductDetail(item.id_product)
                        // }
                      >
                        <Ionicons name="add" size={10 * 2} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </BlurView>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  viewContent: {
    backgroundColor: "#000",
    padding: 14,
    // marginTop:8,
  },
  container: {
    height: 150,
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 10 * 2.4,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 14,
    marginTop: 16,
  },
  item: {
    margin: 14,
    marginBottom: -2,
    marginTop: -2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textitem: {
    color: "#52555A",
    fontSize: 10 * 2,
  },
  textitemac: {
    color: "#D17842",
    fontSize: 10 * 2,
  },
  product: {
    width: windowWidth / 2 - 10 * 2,
    width: windowWidth / 2 - 10 * 2,
    marginBottom: 10,
    borderRadius: 10 * 2,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10 * 2,
  },
  nametext: {
    color: "#fff",
    fontWeight: "600",
    lineHeight: 22,
    fontSize: 10 * 1.6,
    marginTop: 10,
    marginBottom: 10 / 2,
  },
  bodyview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  pad: {
    padding: 10,
  },
  includedtext: {
    color: "#52555A",
    fontSize: 10 * 1.2,
  },
  pricetext: {
    color: "#fff",
    fontSize: 10 * 1.5,
  },
  add: {
    backgroundColor: "#D17842",
    padding: 10 / 2,
    borderRadius: 10,
  },
  infoview: {
    marginVertical: 10 / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceview: {
    flexDirection: "row",
  },
});
