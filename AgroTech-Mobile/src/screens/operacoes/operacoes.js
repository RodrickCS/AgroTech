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
  const [dadosManutencao, setDadosManutencao] = useState([]);

  useEffect(() => {
    fetchOperacaoViagem();
    setInterval(() => {
      fetchOperacaoViagem();
    }, 15000);
  }, []);
  useEffect(() => {
    fetchOperacaoManutencao();
    setInterval(() => {
      fetchOperacaoManutencao();
    }, 15000);
  }, []);

  const fetchOperacaoViagem = () => {
    fetch("http://localhost:3000/veiculos/readvw")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDadosVeiculo(data);
      });
  };
  const fetchOperacaoManutencao = () => {
    fetch("http://localhost:3000/manutencoes/readvwmb")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDadosManutencao(data);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.viagensContainer}>
        <Text style={{ color: "white", marginLeft: "120px", fontSize: "20px" }}>
          Viajando
        </Text>
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
                  <Text style={{ color: "white" }}>
                    Veiculo: {veiculo.marca}
                  </Text>
                  <Text style={{ color: "white" }}>Placa: {veiculo.placa}</Text>
                  <Text style={{ color: "white" }}>Nome: {veiculo.nome}</Text>
                  <Text style={{ color: "white" }}>
                    Descrição: {veiculo.descricao}
                  </Text>
                  <Text style={{ color: "white" }}>
                    Hora saida:
                    {veiculo.hora_saida.split("T")[1].split(".")[0]}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.manutencaoContainer}>
        <Text style={{ color: "white", marginLeft: "90px", fontSize: "20px" }}>
          Em manutenção
        </Text>
        <ScrollView>
          {dadosManutencao.map((manutencao, index) => {
            console.log(manutencao);
            return (
              <View style={styles.card} key={index}>
                <ScrollView>
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
                    <Text style={{ color: "white" }}>
                      Veiculo: {manutencao.marca}
                    </Text>
                    <Text style={{ color: "white" }}>
                      Placa: {manutencao.placa}
                    </Text>
                    <Text style={{ color: "white" }}>Nome: {manutencao.descricao}</Text>
                    <Text style={{ color: "white" }}>
                      Hora início:
                      {manutencao.data_inicio.split("T")[1].split(".")[0]}
                    </Text>
                  </View>
                </ScrollView>
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
    padding: "10px",
  },
  viagensContainer: {
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    height: "50%",
    gap: "10px",
    backgroundColor: "#80b918",
  },
  manutencaoContainer: {
    padding: "30px",
    borderRadius: "12px",
    marginTop: "12px",
    width: "100%",
    gap: "10px",
    height: "50%",
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
