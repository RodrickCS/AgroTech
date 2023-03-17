import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Veiculos from "../../screens/veiculos/veiculos";
import Operacoes from "../../screens/operacoes/operacoes";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function GerenciamentoTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#AACC00",
        tabBarInactiveTintColor: "#ddd",
        tabBarStyle: {
          backgroundColor: "#007f5f",
          borderTop: "1px solid #AACC00",
        },
      }}
    >
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
          tabBarLabel: "Operações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
        name="Manutenções"
        component={Operacoes}
      />
    </Tab.Navigator>
  );
}
