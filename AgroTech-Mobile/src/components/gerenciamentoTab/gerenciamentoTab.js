import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Gerenciamento from "../../screens/gerenciamento/gerenciamento";
import Veiculos from "../../screens/veiculos/veiculos";
import Manutencoes from "../../screens/manutencoes/manutencoes";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function GerenciamentoTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#AACC00",
        tabBarStyle: {
          backgroundColor: "#007f5f",
          borderTop: "1px solid #AACC00"
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        name="Gerenciamento"
        component={Gerenciamento}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Veiculos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" color={color} size={size} />
          ),
        }}
        name="Veiculos"
        component={Veiculos}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Manutençoes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hammer" color={color} size={size} />
          ),
        }}
        name="Manutenções"
        component={Manutencoes}
      />
    </Tab.Navigator>
  );
}
