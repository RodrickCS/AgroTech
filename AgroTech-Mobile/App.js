import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/login/login.js";
import GerenciamentoTab from "./src/components/gerenciamentoTab/gerenciamentoTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="GerenciamentoRedirectToComponent"
          component={GerenciamentoTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
