import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import { globalStyles } from "../../styles/global";

const PriceChart = () => {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 133],
      },
    ],
  };

  return (
    <View style={{ width: "100%", position: "relative" }}>
      <LineChart
        data={data}
        width={screenWidth}
        height={250}
        yAxisLabel="$"
        chartConfig={{
          // backgroundColor: "#e26a00",
          backgroundGradientFrom: globalStyles.colors.blue500,
          backgroundGradientTo: globalStyles.colors.blue500,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default PriceChart;
