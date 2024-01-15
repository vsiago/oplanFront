import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from '@react-navigation/native'

import { AuthContext } from "../contexts/AuthContext";


export default function Dashboard() {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.openDrawer()
  }

  const { signOut, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        // Background Linear Gradient
        colors={["#125B85", "#29A0E0", "#31E5C5"]}
        start={{ x: 0, y: -1 }}
        end={{ x: 1.5, y: 1.5 }}
        style={styles.backgroundHeader}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Olá, {user.name}</Text>
          <Button title="Abrir menu" onPress={handleOpenDrawer}/>
          <LinearGradient
            colors={["#08BF7D", "rgba(8, 191, 125, 0.4)"]}
            style={styles.buttonProductCard}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.6, y: .2 }}
          >
          <TouchableOpacity style={styles.touchButtonCard}>
            <Text style={styles.labelCard}>Meu Cartão</Text>
            <Text style={styles.labelCardProductName}>costa verde</Text>
            {/* <Button title="Sair" onPress={signOut}></Button> */}
          </TouchableOpacity>
          </LinearGradient>
          {/* <Button title="Sair do app" onPress={signOut} /> */}
        </View>
      </LinearGradient>
      {/* <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D384F",
  },
  backgroundHeader: {
    height: 250,
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  headerContainer: {
    marginTop: 50,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    color: "#fff",
  },
  buttonProductCard: {
    marginTop: 30,
    height: 73,
    width: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(121, 240, 183, 0.38)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'rgba(0, 0, 0, .5)',
    shadowOffset: {
      width: 50,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 30, 
  },
  labelCard: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13.5,
    paddingVertical: 4,
  },
  labelCardProductName: {
    color: "#rgba(207, 237, 202, 1)",
    fontWeight: "bold",
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  touchButtonCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
});
