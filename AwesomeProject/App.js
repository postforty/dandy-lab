import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

const handleClick = () => {
  return Alert.alert("버튼 클릭함!");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>AR APP TEST!</Text>
      <Button title="클릭!" onPress={handleClick} />
      {/* <button onClick={handleClick}>클릭!</button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
