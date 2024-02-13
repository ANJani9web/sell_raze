import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import Main from "./Main";
import Setting from "./Setting";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Profile from "./Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      style={styles.container}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons
                    name="home-sharp"
                    color="black"
                    style={styles.size}
                    size={32}
                  />
                ) : (
                  <Ionicons
                    name="home-outline"
                    style={styles.size}
                    color="black"
                    size={32}
                  />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <FontAwesome5
                    name="user-alt"
                    style={styles.size}
                    color="black"
                    size={32}
                  />
                ) : (
                  <FontAwesome5
                    name="user"
                    style={styles.size}
                    color="black"
                    size={32}
                  />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons
                    name="settings"
                    style={styles.size}
                    color="black"
                    size={32}
                  />
                ) : (
                  <Ionicons
                    name="settings-outline"
                    style={styles.size}
                    color="black"
                    size={32}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default gestureHandlerRootHOC(HomeScreen);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    elevation: 10,
  },
  size: {
    size: 45,
  },
});
