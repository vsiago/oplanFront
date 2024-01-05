import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { signOut, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.title}>Bem vindo {user.name}</Text>
      <Button title="Sair do app" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
