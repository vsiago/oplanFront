import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper"
import { LinearGradient } from 'expo-linear-gradient';


export default function SCNoticias() {

  return (
    <>
      <Text style={styles.text}>notícias</Text>
        <Swiper
            autoplay={false}
            loop={true}
            paginationStyle={{ bottom: 20 }}
            dotColor="#50596B"
            activeDotColor="#31A7E5"
            style={styles.swiperContainer}
        >
            <View >
                <LinearGradient style={styles.slide} colors={['#4F5F81', 'rgba(79, 95, 129, .5)']}>
                    <Text>Slide 1</Text>
                </LinearGradient>
            </View>
            <View>
                <LinearGradient style={styles.slide} colors={['#4F5F81', 'rgba(79, 95, 129, .5)']}>
                    <Text>Slide 2</Text>
                </LinearGradient>
            </View>
            <View>
                <LinearGradient style={styles.slide} colors={['#4F5F81', 'rgba(79, 95, 129, .5)']}>
                    <Text>Slide 3</Text>
                </LinearGradient>
            </View>
        </Swiper>
    </>
  );
}

const styles = StyleSheet.create({
swiperContainer: {
    height: 300,
},
slide: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    borderRadius: 20,
    marginHorizontal: 20,
  },
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
});
