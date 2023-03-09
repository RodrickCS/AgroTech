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
    fetchManutencoes();
    setInterval(() => {
      fetchManutencoes();
    }, 15000);
  }, []);

  const fetchManutencoes = () => {
    fetch("http://localhost:3000/manutencoes/read")
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
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Logo />
                </View>
                <View style={styles.cardBody}>
                  <Text style={{color: "white"}} >id veiculo: {veiculo.id_veiculo}</Text>
                  <Text style={{color: "white"}} >Descricao: {veiculo.descricao}</Text>
                  <Text style={{color: "white"}} >Valor gasto: R${veiculo.valor_gasto}</Text>
                  <Text style={{color: "white"}} >Data início: {veiculo.data_inicio.split("T")[1].split(".")[0]}</Text>
                  <Text style={{color: "white"}} >
                    Data fim:
                    {veiculo.data_fim === null
                      ? (veiculo.data_fim = " Em andamento")
                      : " " + veiculo.data_fim.split("T")[1].split(".")[0]}
                  </Text>
                </View>
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
    flexDirection: "column",
    width: "100%",
    height: "150px",
    marginBottom: "10px",
    borderRadius: "12px",
    backgroundColor: "#007f5f",
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
  },
});
