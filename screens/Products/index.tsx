import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDetailsStore } from "@/Store/useDetailsStore";


const ProductScreen = ({route}:any) => {
  
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{route.params.category}</Text>
    </View>
    
  );
};

export default ProductScreen;
