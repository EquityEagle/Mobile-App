import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { styledPairsConatiner } from "../styles/styled";
import { pairsdata } from "../../constant/pairs";

const Pairs = ({ setSelectedPair, setModalVisible }) => {
  const [value, setValue] = React.useState("");

  const filteredPairs = pairsdata.filter((item) =>
    item.pair.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <View style={styledPairsConatiner.container}>
      <View>
        <Searchbar
          mode="view"
          placeholder="Search symbol"
          value={value}
          onChangeText={(text) => setValue(text)}
          style={{ borderTopRightRadius: 9, borderTopLeftRadius: 9 }}
        />
      </View>
      <FlatList
        data={filteredPairs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styled.click}
            onPress={() => {
              setSelectedPair(item.pair);
              setModalVisible(false);
            }}
          >
            <Text style={styled.text}>{item.pair}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  click: {
    padding: 10,
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
  },
});

export default Pairs;
