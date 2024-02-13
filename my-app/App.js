import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen" // Set initial route to HomeScreen
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Removed the Welcome screen from the initial stack */}
      <Stack.Screen
        name="HomeScreen"
        component={gestureHandlerRootHOC(HomeScreen)}
      />
    </Stack.Navigator>
  );
}

export default App;
