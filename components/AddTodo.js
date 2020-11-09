import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const textInput = useRef();
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  const resetHandler = () => {
    setText("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={(val) => changeHandler(val)}
        ref={textInput}
      />
      <Button
        onPress={() => {
          submitHandler(textInput, text);
          resetHandler(text);
        }}
        title="add todo"
        color="#336FFF"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#336FFF",
    fontSize: 15,
  },
});
