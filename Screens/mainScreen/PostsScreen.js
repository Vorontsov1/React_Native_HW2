import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";



const PostsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="logout"
          size={24}
          color="black"  
          />
        </View>
      <Text>PostsScreen</Text>
    </View>
  );
}

export default PostsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBBC05",
  },
  header: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingTop: Platform.OS === "ios" ? 40 : 10,
    paddingRight: 30,
    marginTop: 30,
  },
});