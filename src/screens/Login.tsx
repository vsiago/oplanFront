import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";

import { AuthContext } from "../contexts/AuthContext";

export default function SingIn() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      return;
    }

    await signIn({ email, password });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-oplan-slogan.png")} // Substitua pelo caminho da sua imagem
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Acessar conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#2D384F",
  },
  logo: {
    width: 240,
    height: 65,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    padding: 22,
  },
  input: {
    height: 46,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#626262",
    borderRadius: 6,
  },
  buttonEntrar: {
    width: "90%",
    marginTop: 16,
    backgroundColor: "#31A7E5",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
