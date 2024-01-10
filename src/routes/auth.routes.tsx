import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackground: () => (
            <View style={{ backgroundColor: "#2D384F", flex: 1 }} />
          ),
          headerTintColor: "#DDE4E9",
          headerTitle: " ",
        }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{
          headerBackground: () => (
            <View style={{ backgroundColor: "#2D384F", flex: 1 }} />
          ),
          headerTintColor: "#DDE4E9",
          headerTitle: " ",
        }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
