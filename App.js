import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Constants from "expo-constants";

const { width: deviceWIDTH, height: deviceHEIGHT } = Dimensions.get("window");

export default function App() {
  const [text, setText] = useState("");

  const handleTextChange = (words) => {
    setText(words);
    AsyncStorage.setItem("text", words);
  };

  useEffect(() => {
    AsyncStorage.getItem("text").then((res) => setText(res));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff7dc4" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Exibidor de Texto</Text>
      </View>

      <View style={styles.alignBody}>
        <View style={styles.adjustInputButton}>
          <TextInput
            style={styles.input}
            placeholder="Insira o texto aqui!"
            selectionColor="#ff7dc4"
            value={text}
            onChangeText={(words) => handleTextChange(words)}
          />
          <TouchableOpacity style={styles.btn} onPress={() => setText("")}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.mainText}>
          {text ? text : "O texto apareçera aqui!"}
        </Text>
        <Text style={styles.credits}>
          Desenvolvido com ❤️ por Bruno Nascimento
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ff7dc4",
    alignItems: "center",
    padding: 15,
    elevation: 2,
    width: deviceWIDTH,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  alignBody: {
    height: deviceHEIGHT - 120,
    width: deviceWIDTH - 20,
    margin: 15,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
    width: "60%",
  },
  mainText: {
    fontSize: 18,
    marginTop: 30,
    textAlign: "center",
  },
  adjustInputButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    padding: 8,
    backgroundColor: "#ff7dc4",
    width: "38%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  credits: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});
