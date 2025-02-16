import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  choiceContainer: {
    justifyContent: "space-between",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    padding: 5,
  },
  choice: {
    width: "47%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  selectedChoice: {
    backgroundColor: "#c67c4e",
  },
  choiceText: {
    textAlign: "center",
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  selectedChoiceText: {
    color: "#fff",
  },
  sectionContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  addressText: {
    fontSize: 14,
    color: "#6D6D6D",
  },
  buttonRow: {
    gap: 20,
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 0.3,
    borderRadius: 10,
    alignItems: "center",
    gap: 5,
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  foodItemContainer: {
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  foodDetails: {
    flex: 1,
    marginLeft: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#6D6D6D",
  },
  counterContainer: {
    justifyContent: "space-between",
    gap: 15,
  },
  counterText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  discountContainer: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  discountText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6D6D6D",
  },
  discountIcon: {
    color: "#c67c4e",
    marginRight: 5,
  },
  priceRow: {
    justifyContent: "space-between",
    marginVertical: 5,
  },
  priceLabel: {
    fontSize: 16,
    color: "#000",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  strikethroughText: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#6D6D6D",
    marginRight: 5,
  },
  totalPriceContainer: {
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10
  },
  totalText: {
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#c67c4e",
  },
  orderButton: {
    backgroundColor: "#c67c4e",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentSummaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 20,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c67c4e",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  paymentIcon: {
    color: "#c67c4e",
    marginRight: 5,
  },
  paymentText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  moreIcon: {
    color: "#888",
  },
});
