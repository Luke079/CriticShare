import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [portrait, setPortait] = useState(windowHeight > windowWidth);
  Dimensions.addEventListener("change", ({ window }) => {
    setPortait(window.height > window.width);
  });

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.header} />
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <View style={styles.infoContainer}>
        <Button
          title="Click me"
          onPress={() => {
            alert("Hello");
          }}
        />
        {Platform.OS == 'ios' && (
          <Text>Apple device</Text>

        )}
        {Platform.OS == 'android' && (
          <Text>Android device</Text>

        )}
        {portrait && <Text>Is portrait mode</Text>}
        <TextInput style={styles.textInput} placeholder="Input Name" />
        <TouchableOpacity onPress={() => alert("Pressed")}>
          <Text style={styles.btn}>Also click me</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: windowHeight / 6
  },
  header: {
    backgroundColor: "#0247bf",
    width: windowWidth,
    height: windowHeight / 4,
    position: "absolute",
    top: 0,
    zIndex: 1
  },
  logo: {
    width: windowWidth / 2,
    height: windowHeight / 4,
    position: "absolute",
    top: windowHeight / 8,
    zIndex: 1
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#0247bf",
    fontSize: 24,
    padding: 10,
    textAlign: "center",
    color: "#fff",
  },
  infoContainer: {
    display: "flex",
  },
});
