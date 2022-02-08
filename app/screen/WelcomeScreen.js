import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <Image
        style={styles.logo}
        source={require("../assets/LogoKhanaSabkliye-01.png")}
      />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: "50px",
  },
});
