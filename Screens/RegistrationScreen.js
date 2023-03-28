import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/image/PhotoBG.png")}
      >
        <View>
          <TextInput style={styles.input} placeholder="Login" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#c9e4ca",
    borderRadius: 10,
    height: 50,
    width: 400,
    padding: 16,
    marginHorizontal: 40,
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
