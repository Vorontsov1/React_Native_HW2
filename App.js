import React from 'react';
// import LoginScreen from './Screens/LoginScreen';
// import RegistrationScreen from './Screens/RegistrationScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from "./Screens/mainScreen/PostsScreen"; 
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';


const Stack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default App;

//Screen


//  <Stack.Navigator>
//    <Stack.Screen
//      name="Registration"
//      component={RegistrationScreen}
//      options={{ headerShown: false }}
//    />
//    <Stack.Screen
//      name="Login"
//      component={LoginScreen}
//      options={{ headerShown: false }}
//    />
//  </Stack.Navigator>;
