import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Background.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
