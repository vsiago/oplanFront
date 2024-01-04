import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";

export default function NewsCarousel() {
  return (
    <View style={styles.swiperContainer}>
      <Swiper autoplay={true} loop={true}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: 200,
    padding: 10,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c3c3c3",
    height: 200,
    borderRadius: 10,
  },
});
