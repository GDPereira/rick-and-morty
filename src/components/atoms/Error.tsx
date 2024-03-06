import { Text } from "@rneui/themed";
import { StyleSheet } from "react-native";

export const ErrorText = () => {
  return <Text style={styles.text}>Something went wrong!</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 22,
    color: "red",
  },
});