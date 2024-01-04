import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

export default function Home() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("login" as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight style={styles.touchable}>
          <Image
            source={require("../../assets/logo-oplan.png")} // Substitua pelo caminho da sua imagem
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchable} onPress={navigateToLogin}>
          <Text style={styles.entrar}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#2D384F",
    width: screenWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
  },
  touchable: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
  },
  entrar: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#31A7E5",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  logo: {
    width: 140,
    height: 45,
  },
});
