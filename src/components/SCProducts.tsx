import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SCProducts() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Produtos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 42,
    marginTop: 20,
  },
  text: {
    color: "#A0B3CF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontSize: 14,
  },
});
