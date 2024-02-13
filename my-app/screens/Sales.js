import React, { useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import ActivityBreakdown from "./Activity breakdown";
import TotalSales from "./Totalsales";

const Sales = () => {
  const [selectTSale, setSelectTSale] = useState(true);

  const onPressTotalSales = () => {
    setSelectTSale(true);
  };

  const onPressTotalSalesActivity = () => {
    setSelectTSale(false);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "100%", minHeight: "100%" }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#f8f8f8",
              borderRadius: 20,
              padding: 10,
              width: "60%",
              marginLeft: 20,
            }}
          >
            <Pressable
              onPress={onPressTotalSales}
              style={{
                borderRadius: 20,
                padding: 10,
                margin: 5,
                alignItems: "center",
                backgroundColor: selectTSale ? "#2e2e2e" : "transparent",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: selectTSale ? "white" : "black",
                }}
              >
                Total Sales
              </Text>
            </Pressable>

            <Pressable
              onPress={onPressTotalSalesActivity}
              style={{
                borderRadius: 20,
                padding: 10,
                margin: 5,
                alignItems: "center",
                backgroundColor: !selectTSale ? "#2e2e2e" : "transparent",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: !selectTSale ? "white" : "black",
                }}
              >
                Activity breakdown
              </Text>
            </Pressable>
          </View>
          {selectTSale ? <TotalSales /> : <ActivityBreakdown />}
        </ScrollView>
      </View>
    </View>
  );
};

export default Sales;
