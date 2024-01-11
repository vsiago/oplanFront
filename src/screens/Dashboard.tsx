import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { signOut, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#125B85", "#29A0E0", "#31E5C5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1.5 }}
        style={styles.backgroundHeader}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Olá, {user.name}</Text>
          <LinearGradient
            colors={["#08BF7D", "rgba(8, 191, 125, 0.4)"]}
            style={styles.buttonProductCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.6, y: 1 }}
          >
            <Text style={styles.labelCard}>Meu Cartão</Text>
            <Text style={styles.labelCardProductName}>costa verde</Text>
          </LinearGradient>
          {/* <Button title="Sair do app" onPress={signOut} /> */}
        </View>
      </LinearGradient>
      {/* <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D384F",
  },
  backgroundHeader: {
    height: 220,
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  headerContainer: {
    marginTop: 40,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    color: "#fff",
  },
  buttonProductCard: {
    marginTop: 10,
    height: 65,
    width: 110,
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: "rgba(121, 240, 183, 0.58)",
    alignItems: "center",
    justifyContent: "center",
  },
  labelCard: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    paddingVertical: 4,
    marginTop: 8,
  },
  labelCardProductName: {
    color: "#rgba(207, 237, 202, 1)",
    fontWeight: "bold",
    fontSize: 10.8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
