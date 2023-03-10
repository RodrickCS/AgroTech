import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Logo from "../../components/Logo/logo";

export default function Login({ navigation }) {
  const [dadosVeiculo, setDadosVeiculo] = useState([]);

  useEffect(() => {
    fetchVeiculos();
    setInterval(() => {
      fetchVeiculos();
    }, 15000);
  }, []);

  const fetchVeiculos = () => {
    fetch("http://localhost:3000/veiculos/read")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDadosVeiculo(data);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.veiculosContainer}>
        <ScrollView>
          {dadosVeiculo.map((veiculo, index) => {
            return (
              <View style={styles.card} key={index}>
                <Logo/>
                <Text style={{color: "white"}}>{veiculo.id_veiculo}</Text>
                <Text style={{color: "white"}}>{veiculo.marca}</Text>
                <Text style={{color: "white"}}>{veiculo.placa}</Text>
                <Text style={{color: "white"}}>
                  {veiculo.disponivel === true
                    ? (veiculo.disponivel = "Disponível")
                    : (veiculo.disponivel = "Indisponível")}
                </Text>
              </View>
            );
          })}
        </ScrollView>
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
  veiculosContainer: {
    padding: "30px",
    borderRadius: "12px",
    marginTop: "12px",
    width: "100%",
    height: "595px",
    backgroundColor: "#80b918",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "60px",
    marginBottom:"10px",
    borderRadius: "12px",
    backgroundColor: "#007f5f",
  },
});
