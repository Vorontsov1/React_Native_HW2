import React, { useState, useEffect } from "react";
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
  Dimensions,
  Button,
} from "react-native";


const initialstate = {
  email: "",
  password: "",
};



const LoginScreen = ({ navigation }) => {
   console.log("navigation", navigation);
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialstate);
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

 useEffect(() => {
   const onChange = () => {
     const width = Dimensions.get("window").width - 20 * 2;
     setdimensions(width);
   };
   Dimensions.addEventListener("change", onChange);
   return () => {
     Dimensions.removeEventListener("change", onChange);
   };
 }, []);
 

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
                  <Text style={styles.inputTitle}>Log In</Text>
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
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>

                <View>
                  <Text
                    onPress={() => navigation.navigate("Registration")}
                    style={styles.subTitle}
                  >
                    Not yet an account? Sign up!
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

export default LoginScreen;

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
  imageTop: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#c9e4ca",
    borderRadius: 10,
    height: 50,
    width: 400,
    padding: 16,
    marginVertical: 5,
    fontSize: 16,
    textAlign: "left",
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
  formWrap: {
    // position: "absolute",
    bottom: -40,
    paddingTop: 32,
    paddingHorizontal: 20,
    width: "100%",
    paddingBottom: 40,
    backgroundColor: "#fff",
    borderRadius: 45,
  },

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
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "gray",
    marginTop: 16,
  },
  linkToReg: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "gray",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
