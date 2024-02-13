import { Text, Image, View, Pressable,StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const profile_image =
  "https://s3-alpha-sig.figma.com/img/57e4/f7f8/a4beaecfd8b2d53f637f2ec79f78cbe9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh4hNMnBKKv8QgcWMjNC2YE8D-Bgw-WG81cIlulmnlez8qdYyKqAr5Zc~4l0wh32cwYW-G9hlXKuZ815FTi9mf7JN688pcr98HztpULTgTDbMnjOKJwPiMR40hBsi4x8VXeEmsBd8Oqcr80oxqadwcGe7Fug64kdMsS-bJQoZJf6uZpBOKlH78msdxXrYy3ohm83A8gT1AfPFeZhW9PheH~8x11mvcPwQC1yQdr1J54eSvIM24or5KqwAHCVGXgXrkPt2Xg3qJJmXPUJQSDE5PluRymd77namtSlbJdv2aMAeKAcnQjRH1y0crSbxuyKHV7WlGjR0k84lKS4g7aRGQ__";
const Setting = () => {
  return (
    <View style={style.contianer}>
      <View className="flex justify-center mt-[45px]  items-center">
        <Text className="font-bold text-lg">Settings</Text>
      </View>
      <View className="flex flex-row  m-3 mt-5 w-[78%] mx-auto">
        <View className="bg-[#F7B0B0] flex  mt-1 w-[40px] h-[40px] rounded-full">
          <Image
            className="w-[40px] h-[40px]"
            source={{
              uri: profile_image,
            }}
          />
        </View>
        <View>
          <Text className="font-bold ml-2">Patrick Young</Text>
          <Text className="text-[15px] ml-2">Edit profile</Text>
        </View>
      </View>
      <View>
        <View className="flex flex-row justify-between w-[90%] mx-auto mt-11">
          <Text className="font-bold ml-2 text-[20px]">Payment methods</Text>
          <Pressable className="bg-[#d8d8d8] p-1 rounded-md px-2 ">
            <Text className="text-[15px]">+Add method</Text>
          </Pressable>
        </View>
        <View className="w-[83%] mx-auto  mt-2">
          <View className="flex flex-row">
            <View className="w-[20px] h-[20px] border-[1px] border-gray-300 rounded-full"></View>
            <Image
              className="bg-contain w-[45px] h-[32px] ml-2"
              source={require("../Images/amazon.png")}
            />
            <Text className="font-semibold ml-2 text-[15px]">
              Amazon Gift card
            </Text>
          </View>
          <View className="flex flex-row mt-4">
            <View className="w-[20px] h-[20px] border-[1px] border-gray-300  rounded-full"></View>
            <Image
              className="bg-contain w-[40px] h-[36px] ml-3"
              source={require("../Images/venmo.png")}
            />
            <View>
              <Text className="font-semibold ml-2 text-[15px]">Venmo</Text>
              <Text className=" ml-2 text-[15px]">@tylerma</Text>
            </View>
          </View>
        </View>
        <View></View>
      </View>
      <View>
        <View className="flex flex-row justify-between w-[90%] mx-auto mt-11">
          <Text className="font-bold ml-2 text-[20px]">Shipping addresses</Text>
          <Pressable className="bg-[#d8d8d8] p-1 rounded-md px-2 ">
            <Text className="text-[15px]">+Add address</Text>
          </Pressable>
        </View>
        <View className="w-[87%] mx-auto my-2 ">
          <View className="flex flex-row justify-between mt-2 ">
            <View className=" w-[60%]">
              <Text className="font-semibold ml-2 text-[15px]">Tyler Ma</Text>
              <Text className=" ml-2 text-[15px] ">
                237 Birchmore Walk, Lawrenceville GA 30044
              </Text>
            </View>
            <View className="flex justify-center items-center">
              <SimpleLineIcons name="pencil" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View className=" w-[90%] mx-auto mt-11">
          <Text className="font-bold ml-2 text-[17px]">Preferences</Text>
          <View className="flex flex-row justify-between mt-2">
            <Text className="font-bold ml-2 text-[12px] ">Appearance</Text>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View>
        <View className=" w-[90%] mx-auto mt-5">
          <View>
            <Text className="font-bold ml-2 text-[18px] m-2 text-[#FF3E3E]">
              Log out
            </Text>
            <Text className="font-bold ml-2 text-[18px] m-2 text-[#667385]">
              Delete account
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Setting;

const style = StyleSheet.create({
  contianer:{
     flex: 1, 
     backgroundColor: "white" 
  },
})

