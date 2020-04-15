import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: 350,
    height: "auto",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,

  },
  image: {
    margin: 20,
    width: "80%",
    height: 200,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  name: {
    fontSize: 30
  },
  description: {
    fontSize: 15,
    margin: 20
  },
  text: {
    fontSize: 30,
    margin: 20
  },
  box: {
    margin: 20
  }
});