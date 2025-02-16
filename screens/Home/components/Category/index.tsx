import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useDetailsStore } from "@/store/useDetailsStore";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "@/app/app";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

const Category = () => {
  type NavigationProp = StackNavigationProp<RootStackParamList, "Products">;
  const navigation = useNavigation<NavigationProp>();
  const { details, fetchDetails } = useDetailsStore();
  const [coffeeChosen, setCoffeeChosen] = useState("Cappuccino");
  const coffeeImages = {
    coffee: require("@/assets/coffee.png"),
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <View>
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCoffeeChosen("Cappuccino")}
          >
            <Text style={styles.textStyle}>Cappuccino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCoffeeChosen("Macchiato")}
          >
            <Text style={styles.textStyle}>Macchiato</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCoffeeChosen("Latte")}
          >
            <Text style={styles.textStyle}>Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCoffeeChosen("Americano")}
          >
            <Text style={styles.textStyle}>Americano</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{ display: "flex" }}>
        <View style={styles.resultContainer}>
          <FlatList
            style={{ height: "auto", paddingBottom: 300 }}
            data={details.filter((detail) => detail.category === coffeeChosen)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{ padding: 5 }}
            renderItem={({ item }) => (
              <View style={styles.result}>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Products", item)}
                >
                  <Image
                    source={coffeeImages["coffee"]}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <Text style={styles.resultName}>{item.name}</Text>
                <Text style={styles.resultSub}>With Chocolate</Text>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: "32%" }}
                >
                  <Text style={styles.resultPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                  <TouchableOpacity>
                    <Icon
                      name="plus"
                      color="white"
                      size={20}
                      style={{
                        backgroundColor: "#c67c4e",
                        padding: 10,
                        width: 38,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
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
