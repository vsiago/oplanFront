import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScreen from "../screens/Dashboard";

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      ></AppStack.Screen>
    </AppStack.Navigator>
  );
}
