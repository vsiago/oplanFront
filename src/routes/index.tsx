import { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
  const { isAuthenticated } = useContext(AuthContext);
  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#2D384F",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={60} color="#f5f7fb" />
      </View>
    );
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
