import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "./components/Header";
import Category from "./components/Category";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Category />
    </View>
  );
};

export default HomeScreen;
