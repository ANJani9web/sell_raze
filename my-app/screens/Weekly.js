import { Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Weekly = () => {
  return (
    <View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <View className="flex flex-row  justify-between">
            <View className="w-[48%] rounded-md bg-[#EDEFF1] p-2">
              <View>
                <View></View>
                <View className="flex flex-row justify-between ">
                  <View className="">
                    <Image
                      className="bg-contain w-[32px] h-[32px] mt-[-5px]"
                      source={require("../Images/a.png")}
                    />
                  </View>

                  <View className=" flex flex-row">
                    <View className="mt-1">
                      <FontAwesome5
                        name="arrow-circle-up"
                        size={12}
                        color="#00BA77"
                      />
                    </View>
                    <Text className="text-[#00BA77] text-[10px]">+19.4%</Text>
                  </View>
                </View>
              </View>
              <View className="ml-2">
                <Text className="text-[#667385] text-[12px]">Revenue</Text>
                <Text className="text-[#080C10] font-bold text-lg ">
                  $500.34
                </Text>
              </View>
            </View>
            <View className="w-[48%] rounded-md bg-[#EDEFF1] p-2">
              <View>
                <View></View>
                <View className="flex flex-row justify-between ">
                  <View className="">
                    <Image
                      className="bg-contain w-[30px] h-[30px] mt-[-5px]"
                      source={require("../Images/b.png")}
                    />
                  </View>

                  <View className=" flex flex-row">
                    <View className="mt-1">
                      <FontAwesome5
                        name="arrow-circle-up"
                        size={12}
                        color="#00BA77"
                      />
                    </View>
                    <Text className="text-[#00BA77] text-[10px]">+19.4%</Text>
                  </View>
                </View>
              </View>
              <View className="ml-1">
                <Text className="text-[#667385] text-[12px]">Sales</Text>
                <Text className="text-[#080C10] font-bold text-lg ">1289</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row my-3  justify-between">
            <View className="w-[48%] rounded-md bg-[#EDEFF1] p-2">
              <View>
                <View></View>
                <View className="flex flex-row justify-between ">
                  <View className="">
                    <Image
                      className="bg-contain w-[32px] h-[32px] mt-[-5px]"
                      source={require("../Images/c.png")}
                    />
                  </View>

                  <View className=" flex flex-row">
                    <View className="mt-1">
                      <FontAwesome5
                        name="arrow-circle-up"
                        size={12}
                        color="#00BA77"
                      />
                    </View>
                    <Text className="text-[#00BA77] text-[10px]">+19.4%</Text>
                  </View>
                </View>
              </View>
              <View className="ml-2">
                <Text className="text-[#667385] text-[12px]">Expenses</Text>
                <Text className="text-[#080C10] font-bold text-lg ">
                  $500.34
                </Text>
              </View>
            </View>
            <View className="w-[48%] rounded-md bg-[#EDEFF1] p-2">
              <View>
                <View></View>
                <View className="flex flex-row justify-between ">
                  <View className="">
                    <Image
                      className="bg-contain w-[30px] h-[30px] mt-[-5px]"
                      source={require("../Images/d.png")}
                    />
                  </View>

                  <View className=" flex flex-row">
                    <View className="mt-1">
                      <FontAwesome5
                        name="arrow-circle-up"
                        size={12}
                        color="#00BA77"
                      />
                    </View>
                    <Text className="text-[#00BA77] text-[10px]">+19.4%</Text>
                  </View>
                </View>
              </View>
              <View className="ml-1">
                <Text className="text-[#667385] text-[12px]">Listings</Text>
                <Text className="text-[#080C10] font-bold text-lg ">4021</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Weekly;
