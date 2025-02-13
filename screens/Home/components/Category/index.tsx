import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { style } from "../Category/styles";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/app/app";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDetailsStore } from "@/Store/useDetailsStore";
import Icon from "react-native-vector-icons/FontAwesome";

const coffeeImages = {
  coffee: require("../../../../assets/coffee.png"),
};

const Category = () => {
  type NavigationProp = StackNavigationProp<RootStackParamList, "Products">;
  const navigation = useNavigation<NavigationProp>();

  const [coffeeChosen, setCoffeeChosen] = useState("Cappuccino");
  const { details, fetchDetails } = useDetailsStore();

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View>
      <View style={style.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={style.category}
            onPress={() => setCoffeeChosen("Cappuccino")}
          >
            <Text style={style.textStyle}>Cappuccino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.category}
            onPress={() => setCoffeeChosen("Macchiato")}
          >
            <Text style={style.textStyle}>Macchiato</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.category}
            onPress={() => setCoffeeChosen("Latte")}
          >
            <Text style={style.textStyle}>Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.category}
            onPress={() => setCoffeeChosen("Americano")}
          >
            <Text style={style.textStyle}>Americano</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{ display: "flex" }}>
        <View style={style.resultContainer}>
          <FlatList
            style={{ height: "auto", paddingBottom: 300 }}
            data={details.filter((detail) => detail.category === coffeeChosen)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{ padding: 5 }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>navigation.navigate('Products', {category: item.category})}>
                <View style={style.result}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      position: "absolute",
                      zIndex: 2,
                      margin: 5,
                    }}
                  >
                    <Icon name="star" color="gold" size={17} />
                    <Text style={{ color: "#fff" }}> {item.rating}</Text>
                  </View>
                  <Image
                    source={coffeeImages["coffee"]}
                    style={style.image}
                    resizeMode="cover"
                  />
                  <Text style={style.resultName}>{item.name}</Text>
                  <Text style={style.resultSub}>With Chocolate</Text>
                  <Text style={style.resultPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Category;
