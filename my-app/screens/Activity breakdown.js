
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Hour from "./Hour";
import Lifetime from "./Lifetime";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
const ActivityBreakdown = () => {
  const [timeline, settimeline] = useState("Weekly");

  let TimelineComponent = [
    {
      id: "Hour",
      type: <Hour />,
    },
    {
      id: "Weekly",
      type: <Weekly />,
    },
    {
      id: "Monthly",
      type: <Monthly />,
    },
    {
      id: "Lifetime",
      type: <Lifetime />,
    },
  ];


  return (
    <View style={{}}>
      <Text className="mt-7 ml-7  text-lg">Activity breakdown </Text>
      <View className="flex flex-row justify-between  rounded-3xl p-1  mx-5 mt-2 w-[80%]  ">
        <Pressable
          id="Hour"
          onPress={() => {
            settimeline("Hour");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center px-2 ${
            timeline === "Hour" ? "bg-[#BAEEFE]" : "bg-[#f8f8f8]"
          } `}
        >
          <Text
            className={` font-medium p-1 text-[15px] ${
              timeline === "Hour" ? "text-[#076AFF]" : ""
            } `}
          >
            Hour
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            settimeline("Weekly");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center  ${
            timeline === "Weekly" ? "bg-[#BAEEFE]" : "bg-[#f8f8f8]"
          } `}
        >
          <Text
            className={` font-medium py-1 px-3 text-[15px] ${
              timeline === "Weekly" ? "text-[#076AFF]" : ""
            } `}
          >
            Week
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            settimeline("Monthly");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center  ${
            timeline === "Monthly" ? "bg-[#BAEEFE]" : "bg-[#f8f8f8]"
          }`}
        >
          <Text
            className={` font-medium py-1 px-3 text-[15px] ${
              timeline === "Monthly" ? "text-[#076AFF]" : ""
            } `}
          >
            Month
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            settimeline("Lifetime");
          }}
          className={`rounded-2xl p-1  mx-1 flex  items-center ${
            timeline === "Lifetime" ? "bg-[#BAEEFE]" : "bg-[#f8f8f8]"
          } `}
        >
          <Text
            className={` font-medium py-1 px-3 text-[15px] ${
              timeline === "Lifetime" ? "text-[#076AFF]" : ""
            } `}
          >
            Lifetime
          </Text>
        </Pressable>
      </View>
      <View className="w-[90%] mx-auto mt-5">
        {TimelineComponent.map((value, key) => {
          return (
            <View>{value.id === timeline ? <>{value.type}</> : <></>}</View>
          );
        })}
      </View>
    </View>
  );
};

export default ActivityBreakdown;
