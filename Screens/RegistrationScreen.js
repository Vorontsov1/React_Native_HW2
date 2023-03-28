import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
    TextInput,
  TouchableOpacity,
} from "react-native";


const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/image/PhotoBG.png")}
      >
        <View style={styles.formWrap}>
          <View style={styles.form}>
            <Text style={styles.inputTitle}>Registration</Text>
            <View>
              <TextInput style={styles.input} placeholder="Login" />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput style={styles.input} placeholder="Email" />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
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
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 40,
    color: "#212121",
    marginBottom: 16,
  },
  formWrap: {},
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    gap: 16,
    marginTop: 43,
    borderRadius: 30,
    overflow: "hidden",
    height: 50,
    width: "100%",
    marginBottom: 15,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: 55,
  },
});
