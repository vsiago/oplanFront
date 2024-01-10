import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper"
import { LinearGradient } from 'expo-linear-gradient';


export default function SCNoticias() {

  return (
    <>
      <Text style={styles.text}>notícias</Text>
      <LinearGradient
        // Background Linear Gradient
        colors={['#4F5F81', 'rgba(79, 95, 129, .4)']}
        style={styles.swiperContainer}
      >
        <Swiper
            autoplay={false}
            loop={true}
            paginationStyle={{ bottom: -25 }}
            dotColor="#50596B"
            activeDotColor="#31A7E5"
        >
            <View style={styles.slide}>
                <Text>Slide 1</Text>
            </View>
            <View style={styles.slide}>
                <Text>Slide 2</Text>
            </View>
            <View style={styles.slide}>
                <Text>Slide 3</Text>
            </View>
        </Swiper>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#A0B3CF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 35,
    marginTop: 40,
    marginBottom: 15
  },
  swiperContainer: {
    height: 250,
    paddingBottom: 24,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    borderRadius: 10,
  },
});
