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
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("senha1234");
  const [escondeSenha, setEscondeSenha] = useState(true);

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
          AsyncStorage.setItem("token", data[0].token);
          navigation.navigate("GerenciamentoRedirectToComponent");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: "120px", height: "100px" }}
          source={require("../../../assets/AgroTech-Logo.png")}
        />
        <Text style={{ fontSize: "25px" }}>
          Bem <Text style={{ color: "#5ac879" }}>vindo(a)!</Text>
        </Text>
      </View>

      <View style={styles.inputEmailArea}>
        <TextInput
          onChangeText={(val) => {
            setEmail(val);
          }}
          style={styles.inputEmail}
          placeholder="email..."
        />
      </View>
      <View style={styles.inputSenhaArea}>
        <TextInput
          onChangeText={(val) => {
            setPassword(val);
          }}
          style={styles.inputSenha}
          placeholder="Senha..."
          secureTextEntry={escondeSenha}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            setEscondeSenha(!escondeSenha);
          }}
        >
          {escondeSenha ? (
            <Ionicons name="eye" color="#121212" size={25} />
          ) : (
            <Ionicons name="eye-off" color="#121212" size={25} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            login();
          }}
          style={styles.btLogin}
        >
          <Text style={{ fontSize: "20px" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007f5f",
    alignItems: "center",
    gap: "40px",
  },
  inputEmailArea: {
    flexDirection: "row",

    width: "90%",
    backgroundColor: "#121212",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
  },
  inputSenhaArea: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#121212",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
  },
  inputEmail: {
    width: "100%",
    height: 50,
    backgroundColor: "#AACC00",
    padding: 8,
    fontSize: 18,
  },
  inputSenha: {
    width: "85%",
    height: 50,
    backgroundColor: "#AACC00",
    padding: 8,
    fontSize: 18,
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AACC00",
  },
  footer: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btLogin: {
    borderRadius: "8px",
    width: "230px",
    backgroundColor: "#80b918",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
