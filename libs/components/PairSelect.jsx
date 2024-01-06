import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyledPairSelect } from "../styles/styled";
import { Entypo } from "@expo/vector-icons";
import ImageSelector from "./ImagePicker";
import TypeSelection from "./TypeSelection";
import { globalStyles } from "../../styles/global";
import Pairs from "./Pairs";
import CustomPicker from "./CustomPicker";

const PairSelect = ({ hasType, setData, data }) => {
  const [selectType, setSelectType] = useState(false);
  const [selected, setSelected] = useState("");
  const [pairsVisible, setPairsVisble] = useState(false);
  const [selectedPair, setSelectedPair] = useState("");
  const buy = selected === "Buy";
  const sell = selected === "Sell";

  useEffect(() => {
    if (selectedPair) {
      setData({ ...data, pair: selectedPair });
    }
  }, [selectedPair]);

  useEffect(() => {
    if (selected) {
      setData({ ...data, type: selected });
    }
  }, [selected]);

  return (
    <View style={StyledPairSelect.container}>
      {pairsVisible ? (
        <CustomPicker
          setModalVisible={setPairsVisble}
          modalVisible={pairsVisible}
          setSelectedPair={setSelectedPair}
        />
      ) : (
        <TouchableOpacity
          onPress={() => setPairsVisble(true)}
          style={StyledPairSelect.selectCon}
        >
          <Entypo name="select-arrows" size={25} color="#fff" />
          <Text style={StyledPairSelect.selectText}>
            {selectedPair ? selectedPair : "Select Symbol"}
          </Text>
        </TouchableOpacity>
      )}
      {hasType && (
        <>
          {selectType ? (
            <TypeSelection
              setSelected={setSelected}
              setSelectedType={setSelectType}
            />
          ) : (
            <TouchableOpacity
              onPress={() => setSelectType(true)}
              style={StyledPairSelect.selectCon}
            >
              <Entypo name="select-arrows" size={25} color="#fff" />
              <Text
                style={{
                  ...StyledPairSelect.selectText,
                  color: sell
                    ? globalStyles.colors.red500
                    : buy
                    ? globalStyles.colors.green500
                    : "#fff",
                }}
              >
                {selected ? selected : "Select Type"}
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
      <ImageSelector data={data} setData={setData} />
    </View>
  );
};

export default PairSelect;
