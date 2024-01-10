import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

export default function SCProducts() {
  const products = [
    {
      label: "Costa Verde",
      iconComponent: require('../../assets/icons/icon-costa-verde.png'),
      color: "#4F7E81"
    },
    {
      label: "Master Digital",
      iconComponent: require('../../assets/icons/icon-master-digital.png'),
      color: "#465E90"
    },
    {
      label: "Plano Select",
      iconComponent: require('../../assets/icons/icon-plano-select.png'),
      color: "#5C4F81"
    },
    {
      label: "Nutra Revive",
      iconComponent: '',
      color: "#814F6A"
    },
    {
      label: "Revita Care",
      iconComponent: '',
      color: "#81704F"
    },
  ]
  return (
    <>
      <Text style={styles.text}>produtos</Text>
      <View style={styles.container}>
        <ScrollView style={styles.buttonContainer} horizontal showsHorizontalScrollIndicator={false}>
          {products.map((product, index) => (
          <TouchableOpacity key={index} style={[styles.product, {backgroundColor: product.color}]}>
            {product.iconComponent ? <Image source={product.iconComponent} style={styles.iconImage} /> : <Text style={styles.avatarCaractereProduct}>{product.label.slice(0, 1)}</Text> }
            <Text style={styles.label}>
              {product.label}
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
    paddingHorizontal: 35,
    marginTop: 20,
    marginBottom: 15
  },
  buttonContainer: {
    height: 130,
    width: '100%',
  },
  product: {
    flex:1,
    width: 102,
    backgroundColor: '#4F5F81',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 12,
    borderRadius: 10,
    justifyContent: "space-between",
    paddingTop: 18
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 14,
    opacity: .7,
  },
  iconImage: {
    width: 36,
    height: 36
  },
  avatarCaractereProduct: {
    fontSize: 45,
    fontWeight: '300',
    marginTop: -15
  }
});
