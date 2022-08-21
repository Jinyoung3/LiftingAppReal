import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInput1 = () => {
  const [text, onChangeText] = React.useState();

  return (
    <SafeAreaView style = {styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={true}
        placeholder="Password"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    width: '100%',
    justifyContent: 'space-between'
  }
});

export default TextInput1;