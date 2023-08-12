import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import MU from "./Anh/homescreen/MU1.jpg";
import Brazil from "./Anh/homescreen/brazil.jpg";
import Chelsea from "./Anh/homescreen/chelsea-2023.jpg";
import France from "./Anh/homescreen/france1.jpg";
import Portugal from "./Anh/homescreen/portugal.jpg";

import colors from "./config/colors";

const heightWindow = Dimensions.get("window").height;
const widthWindow = Dimensions.get("window").width;

import Swiper from "react-native-swiper";

export default class Category extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View>
          <Text style={styles.txt1}>Danh mục kinh doanh</Text>
        </View>

        <View style={styles.wrapper}>
          <Swiper>
            <Image source={MU} style={styles.Image} />
            <Image source={Brazil} style={styles.Image} />
            <Image source={Chelsea} style={styles.Image} />
            <Image source={France} style={styles.Image} />
            <Image source={Portugal} style={styles.Image} />
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
  },
  wrapper: {
    height: heightWindow / 4,
    width: widthWindow / 1,
    // backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  Image: {
    height: heightWindow / 3,
    width: widthWindow / 1,
    borderRadius: 10,
  },
  txt1: {
    color: "#000",
    fontSize: 10 * 2.1,
    fontWeight: "600",
    marginLeft: 10,
  },
});
