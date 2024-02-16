import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { Maybe } from "../__generated__/graphql";

interface CharacterListInfoProps {
  information: string;
  value?: Maybe<string>;
}

export const CharacterListInfo = ({
  information,
  value,
}: CharacterListInfoProps) => {
  if (!value) return;

  return (
    <View style={styles.descriptionContainer}>
      <Text style={{ flex: 1 }}>
        <Text style={styles.textBold}> {information}:</Text> {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textBold: { fontWeight: "bold" },
});
