import { StyleSheet, View, Text, Image } from "react-native";
import Swiper from 'react-native-swiper'

export default function NewsCarousel() {
  return (
    <View style={styles.swiperContainer}>
      <Swiper
        autoplay={false}
        loop={true}
        paginationStyle={{ bottom: -25 }}
        dotColor="#50596B"
        activeDotColor="#31A7E5"
      >
        <View style={styles.slide}>
          <Image
            source={require("../../assets/thumbs/valesca-thumb.png")} // Substitua pelo caminho da sua imagem
            style={{ width: "100%", height: "100%" }} // Ajuste os valores conforme necessário
          />
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
    height: 190,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F5F81",
    height: 200,
    borderRadius: 10,
  },
});
