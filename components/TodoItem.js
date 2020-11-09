import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text} </Text>
        <AntDesign
          onPress={() => pressHandler(item.key)}
          style={styles.trash}
          name="delete"
          size={24}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    flex: 10,
    justifyContent: "flex-start",
    textAlign: "left",
  },
  trash: {
    flex: 1,
    width: 1,
    paddingLeft: 2,
    justifyContent: "flex-end",
    textAlign: "right",
  },
});
