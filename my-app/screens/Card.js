import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Card = () => {
  return (
    <View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View className=" w-[90%]  mt-5  ">
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.9, y: 0.5 }}
            locations={[0, 0.3, 0.85]}
            colors={["#7394C6", "#076AFF", "#42EEF9"]}
            style={styles.linearGradient}
          >
            <View>
              <View className="flex justify-center items-center">
                <View className="m-5 flex justify-center items-center">
                  <Text className="text-white font-semibold text-sm mb-2">
                    Current balance
                  </Text>
                  <Text className="text-white font-bold text-4xl">$690.40</Text>
                </View>
                  <Pressable className="rounded-xl p-2 w-[60%] mb-5 bg-white flex  items-center">
                    <Text className="text-black font-semibold text-sm ">Cash out</Text>
                  </Pressable>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Card;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#000000",
    backgroundColor: "red",
  },
});
