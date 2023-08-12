import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Feather from "react-native-vector-icons/Feather";

import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";

import { TopProduct, LikedProduct, sliderData } from "../model/data";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

const HomeScreen = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", marginTop: -40 }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/xiaoming.jpg")}
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
                marginBottom: -16,
              }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 40,
            }}
          >
            Hello Xiao Ming
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ marginRight: 5, marginTop: 4 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18 }}>Danh mục</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#0aada8" }}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Sản phẩm bán chạy"
            option2="Sản phẩm ưa thích"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          TopProduct.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          LikedProduct.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              // price={item.price}
              onPress={() =>
                navigation.navigate("GameDetails", {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
