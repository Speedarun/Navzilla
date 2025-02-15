import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./styles";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  const [query, setQuery] = useState("");
  return (
    <View style={style.main}>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.location}>
            <Text style={style.textStyle}>Location</Text>
            <Text style={style.textStyle}>Bilzen, Tanjungbalai</Text>
          </View>
          <Image
            style={style.imgStyle}
            source={require("../../../../assets/user.png")}
          />
        </View>
        <View style={style.searchBar}>
          <Searchbar value={query} onChangeText={setQuery}/>
          {query.length == 0 ? <TouchableOpacity
            style={{
              position: "absolute",
              marginLeft: "85%",
              marginTop: 10,
              backgroundColor: "orange",
              padding: 5,
            }}
          >
            <Icon name="filter" color="white" size={25} />
          </TouchableOpacity>: ""}
          
        </View>
      </View>
      <View style={{ height: 180}}>
        <Image
          source={require("../../../../assets/promo.png")}
          style={style.promoStyle}
        />
      </View>
    </View>
  );
};

export default Header;
