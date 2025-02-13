import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    paddingBottom: 12,
    paddingLeft: 12
  },
  category: {
    marginHorizontal: 5,
    backgroundColor: "#c67c4e",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    width: '100%',
    height: 'auto',
    flex: 1
  },
  result: {
    width: 140,
    margin: 16,
    flex: 1
  },
  resultName: {
    color: "#333",
    fontSize: 18,
    fontWeight: 900
  },
  resultPrice: {
    color: "#333",
    fontSize: 20,
    fontFamily: 'Times New Roman'
  },
  resultSub: {
    color: "#333",
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
    position: 'relative'
  },
  
});
