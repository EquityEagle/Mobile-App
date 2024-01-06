import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";
import { globalStyles } from "../../styles/global";

const PriceChart = ({ profitdata }) => {
  const screenWidth = Dimensions.get("window").width;
  const [dataSet, setDataSet] = useState(false);
  const profitValues = profitdata && profitdata.map((item) => item.profit);
  const formattedLabels = profitdata.map((item) => {
    const date = new Date(item.createdAt);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });

  useEffect(() => {
    if (profitdata) {
      setDataSet(true);
    } else {
      setDataSet(false);
    }
  });

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        data: dataSet ? profitValues : [78, 90, 130, 57, 54],
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
