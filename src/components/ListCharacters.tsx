import { Text } from "@rneui/themed";
import { FlatList } from "react-native";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterItem } from "./CharacterItem";

export const ListCharacters = () => {
  const { data, getMoreData } = useCharacters();

  return (
    <FlatList
      data={data?.characters?.results}
      ListHeaderComponent={
        <Text h3 h3Style={{ textAlign: "center" }}>
          Rick and Morty Characters
        </Text>
      }
      ListHeaderComponentStyle={{ marginBottom: 10 }}
      renderItem={({ item }) => (
        <CharacterItem
          id={item?.id ?? ""}
          image={item?.image ?? ""}
          name={item?.name ?? ""}
        />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={getMoreData}
    />
  );
};
