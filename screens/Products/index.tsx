import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useDetailsStore } from "@/Store/useDetailsStore";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import { style } from "../Home/components/Header/styles";

const ProductScreen = ({ route }: any) => {
  const coffeeImages = {
    coffee: require("@/assets/coffee.png"),
  };
  const [expanded, setExpanded] = useState(false);
  const [sizeSelected, setSizeSelected] = useState('S');
  return (
    <ScrollView>
    <View style={{ margin: 20 }}>
      <Image source={coffeeImages["coffee"]}/>
      <Text style={{ fontSize: 25, fontWeight: "bold", margin: 5, paddingTop: 15 }}>
        {route.params.name}
      </Text>
      <Text style={{ margin: 5 }}>With chocolate</Text>

      <View style={{ flexDirection: "row", margin: 5, paddingBottom: 15 }}>
        <Icon name="star" color="gold" size={22} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {" "}
          {route.params.rating}{" "}
        </Text>
        <Text style={{ marginTop: 5 }}>({route.params.numberOfRatings})</Text>
      </View>

      <View style={{ paddingBottom: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5 }}>
          Description
        </Text>
        <Text numberOfLines={expanded ? undefined : 3} style={{ fontSize: 18, margin: 5 }}>
          {route.params.description}
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={{ color: '#c67c4e', marginTop: 5, fontSize: 15 }}>
          {expanded ? 'Read Less' : 'Read More'}
        </Text>
      </TouchableOpacity>
      </View>

      <View style={{ paddingBottom: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 5,
            paddingBottom: 15,
          }}
        >
          Size
        </Text>
        <View style={{ flexDirection: "row", gap: 25, margin: 5 }}>
          <TouchableOpacity
            style={[
              styles.size,
              sizeSelected === 'S' && styles.selectedSize
            ]}
            onPress={()=> setSizeSelected('S')}
          >
            <Text style={[styles.sizeText, sizeSelected == 'S' && styles.selectedSizeText]}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.size,
              sizeSelected === 'M' && styles.selectedSize
            ]}
            onPress={()=> setSizeSelected('M')}
          >
            <Text style={[styles.sizeText, sizeSelected == 'M' && styles.selectedSizeText]}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.size,
              sizeSelected === 'L' && styles.selectedSize
            ]}
            onPress={()=> setSizeSelected('L')}
          >
            <Text style={[styles.sizeText, sizeSelected == 'L' && styles.selectedSizeText]}>L</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: "12%", margin: 5 }}>
        <Text style={{ width: "20%" }} numberOfLines={2}>
          <Text style={{ fontSize: 20 }}>Price </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#c67c4e" }}>
            {"  "}$ {route.params.price}
          </Text>
        </Text>
        <TouchableOpacity
          style={{
            padding: 12,
            backgroundColor: "#c67c4e",
            borderRadius: 20,
            width: "70%",
          }}
        >
          <Text style={{ fontSize: 22, color: "#fff", textAlign: "center" }}>
            Buy now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default ProductScreen;
