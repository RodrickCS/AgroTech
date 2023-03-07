import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [escondeSenha, setEscondeSenha] = useState(true);
  const [token, setToken] = useState("");

  const uriLogin = "http://localhost:3000/funcionarios/login";

  function login() {
    const form = {
      email: email,
      senha: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };
    fetch(uriLogin, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.msg) {
          console.log(data.msg);
        } else {
          console.log(data[0].token);
          AsyncStorage.setItem("role", data[0].role);
          AsyncStorage.setItem("token", data[0].token);
          navigation.navigate("GerenciamentoRedirectToComponent");
        }
      });
  }

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007f5f",
    alignItems: "center",
    gap: "40px",
  },
});
