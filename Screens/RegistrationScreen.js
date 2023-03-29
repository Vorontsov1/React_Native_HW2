import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialstate = {
  login: "",
  email: "",
  password: "",
};
const RegistrationScreen = () => {
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialstate);

  const keyboardHide = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
      console.log(state);
      setState(initialstate);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../assets/image/PhotoBG.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrap}>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeybord ? 60 : 50,
                }}
              >
                <View style={styles.header}>
                  <Text style={styles.inputTitle}>Registration</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Login"
                    onFocus={() => setIsShowKeybord(true)}
                    value={state.login}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        login: value,
                      }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onFocus={() => setIsShowKeybord(true)}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    onFocus={() => setIsShowKeybord(true)}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  onPress={keyboardHide}
                  activeOpacity={0.8}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.subTitle}>
                    Do you have an account? Sign in
                  </Text>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "flex-end",
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
  form: {},
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  inputTitle: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#212121",
    marginBottom: 16,
  },
  formWrap: {},

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 43,
    borderRadius: 30,
    overflow: "hidden",
    height: 50,
    width: "100%",
    marginBottom: 15,
    ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
        borderColor: "white",
      },
      android: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
    }),
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Platform.OS === "ios" ? "#ffffff" : "transparent",
  },
  subTitle: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#fff",
    marginTop: 16,
  },
});
