import {
  Button,
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";

import Sales from "./Sales";
const img =
  "https://s3-alpha-sig.figma.com/img/57e4/f7f8/a4beaecfd8b2d53f637f2ec79f78cbe9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh4hNMnBKKv8QgcWMjNC2YE8D-Bgw-WG81cIlulmnlez8qdYyKqAr5Zc~4l0wh32cwYW-G9hlXKuZ815FTi9mf7JN688pcr98HztpULTgTDbMnjOKJwPiMR40hBsi4x8VXeEmsBd8Oqcr80oxqadwcGe7Fug64kdMsS-bJQoZJf6uZpBOKlH78msdxXrYy3ohm83A8gT1AfPFeZhW9PheH~8x11mvcPwQC1yQdr1J54eSvIM24or5KqwAHCVGXgXrkPt2Xg3qJJmXPUJQSDE5PluRymd77namtSlbJdv2aMAeKAcnQjRH1y0crSbxuyKHV7WlGjR0k84lKS4g7aRGQ__";

const Main = () => {
  return (
    <View className="bg-white min-h-screen h-content">
      <View className="flex flex-row h-11 mt-[8vh] mx-4 justify-between">
        <View className="flex flex-row ">
          <View className="bg-[#F7B0B0] flex   w-[32px] h-[32px] rounded-full">
            <Image
              className="w-[30px] h-[30px]"
              source={{
                uri: img,
              }}
            />
          </View>
          <Text className="font-bold mt-1 ml-2">My balance</Text>
        </View>
        <View className="mt-1">
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <ScrollView>
        <Card />
        <View className="mt-6">
          <Sales />
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;
