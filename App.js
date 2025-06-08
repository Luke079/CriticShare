import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <Image
        style={styles.logo}
        source={require("./assets/logo.png")}
      />
      <Text>Hello, world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0247bf',
    width: windowWidth,
    height: windowHeight / 4
  },
  logo: {
    width: windowWidth / 2,
    height: windowHeight / 4
  }
});
