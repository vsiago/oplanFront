import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function SCProducts() {
  const buttons = [
    "Costa Verde",
    "Master Digital",
    "Plano Select",
    "Produto 4",
    "Produto 5"
  ]
  return (
    <>
      <Text style={styles.text}>produtos</Text>
      <View style={styles.container}>
        <ScrollView style={styles.buttonContainer} horizontal>
          {buttons.map((button, index) => (
          <TouchableOpacity key={index} style={styles.productCostaVerde}>
            <Text>
              {button}
            </Text>
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#A0B3CF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 42,
    marginTop: 20,
    marginBottom: 15
  },
  buttonContainer: {
    height: 150,
    width: '100%',
  },
  productCostaVerde: {
    width: 120,
    backgroundColor: '#4F5F81',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 12,
    borderRadius: 10,
  }
});
