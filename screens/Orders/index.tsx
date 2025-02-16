import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const OrdersScreen = ({ route }: any) => {
  const coffeeImages = {
    coffee: require("@/assets/coffee.png"),
  };
  const [choice, setChoice] = useState("Deliver");
  const [count, setCount] = useState(1);
  const {
    name,
    id,
    category,
    ratings,
    numberOfRatings,
    description,
    price,
    image,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.choiceContainer]}>
        <TouchableOpacity
          style={[styles.choice, choice == "Deliver" && styles.selectedChoice]}
          onPress={() => setChoice("Deliver")}
        >
          <Text
            style={[
              styles.choiceText,
              choice == "Deliver" && styles.selectedChoiceText,
            ]}
          >
            Deliver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.choice, choice == "Pick Up" && styles.selectedChoice]}
          onPress={() => setChoice("Pick Up")}
        >
          <Text
            style={[
              styles.choiceText,
              choice == "Pick Up" && styles.selectedChoiceText,
            ]}
          >
            Pick Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <Text style={styles.addressTitle}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressText}>
          Kpg Sutoyo No.620, Bilzen, Tanjungbalai
        </Text>

        <View style={[styles.row, styles.buttonRow]}>
          <TouchableOpacity style={styles.options}>
            <Icon name="create-outline" size={15} />
            <Text style={styles.optionText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
            <Icon name="document-text-outline" size={15} />
            <Text style={styles.optionText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.row, styles.foodItemContainer]}>
        <Image source={coffeeImages["coffee"]} style={styles.image} />

        <View style={styles.foodDetails}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.subText}>With Chocolate</Text>
        </View>

        <View style={[styles.row, styles.counterContainer]}>
          <Icon
            name="remove"
            size={20}
            onPress={() => {
              if (count != 1) setCount(count - 1);
            }}
          />
          <Text style={styles.counterText}>{count > 0 ? count : 1}</Text>
          <Icon name="add" size={20} onPress={() => setCount(count + 1)} />
        </View>
      </View>

      <View style={[styles.row, styles.discountContainer]}>
        <Icon name="pricetag" style={styles.discountIcon} size={15} />
        <Text style={styles.discountText}>1 Discount is applied</Text>
        <Icon name="chevron-forward" size={15} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.paymentSummaryText}>Payment Summary</Text>

        <View style={[styles.row, styles.priceRow]}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceText}>$ {(price * count).toFixed(2)}</Text>
        </View>

        <View style={[styles.row, styles.priceRow]}>
          <Text style={styles.priceLabel}>Delivery Fee</Text>
          <Text style={styles.strikethroughText}>$2.0</Text>
          <Text style={styles.priceText}>$1.0</Text>
        </View>
      </View>
      <View style={[styles.row, styles.totalPriceContainer]}>
        <Text style={styles.totalText}>Total Payment</Text>
        <Text style={styles.totalAmount}>
          $ {(price * count + 1.0).toFixed(2)}
        </Text>
      </View>
      
      <View style={styles.paymentContainer}>
      <Icon name="cash-outline" size={16} style={styles.paymentIcon} />
      <TouchableOpacity style={styles.paymentMethod}>
        
        <Text style={styles.paymentText}>Cash</Text>
      </TouchableOpacity>
      <Text style={styles.paymentAmount}>$5.53</Text>
      <TouchableOpacity>
        <Icon name="ellipsis-horizontal" size={20} style={styles.moreIcon} />
      </TouchableOpacity>
    </View>
      
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrdersScreen;
