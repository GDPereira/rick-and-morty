import { FlatList } from "react-native";
import { Character, Maybe } from "../__generated__/graphql";
import { CharacterItem } from "./CharacterItem";

interface ListCharactersProps {
  data?: Maybe<Maybe<Character>[]>;
  getMoreData?: () => void;
}

export const ListCharacters = ({ data, getMoreData }: ListCharactersProps) => {
  return (
    <FlatList
      data={data}
      ListHeaderComponentStyle={{ marginBottom: 10 }}
      renderItem={({ item }) => (
        <CharacterItem key={item?.id} character={item} />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={getMoreData}
    />
  );
};
