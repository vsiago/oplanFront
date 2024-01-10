import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

export default function Home() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.touchable}>
          <Image
            source={require("../../assets/logo-oplan.png")} // Substitua pelo caminho da sua imagem
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={navigateToLogin}>
          <Text style={styles.entrar}>Entrar</Text>
        </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: "#31A7E5",
    paddingHorizontal: 16,
    paddingLeft: 20,
    paddingVertical: 4,
    paddingTop: 6,
    borderRadius: 10,
    fontWeight: "500",
  },
  logo: {
    width: 140,
    height: 45,
  },
});
