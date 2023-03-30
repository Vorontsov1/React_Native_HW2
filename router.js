import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainTab.Navigator>
  );
};
