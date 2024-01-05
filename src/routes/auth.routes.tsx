import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
        name="login"
        component={Login}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
