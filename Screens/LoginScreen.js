import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/image/PhotoBG.png")}
      ></ImageBackground>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
});