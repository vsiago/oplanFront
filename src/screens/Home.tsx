import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/Header";
import NewsCarousel from "../components/SCNewsCarousel";
import SCProducts from "../components/SCProducts";
import SCNoticias from "../components/SCNoticias";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <NewsCarousel />
      <SCProducts />
      <SCNoticias />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#2D384F",
  },
});
