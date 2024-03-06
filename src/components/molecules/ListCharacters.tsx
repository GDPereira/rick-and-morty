import { CharacterItem } from "@components/atoms/CharacterItem";
import type { Character, Maybe } from "@generated/graphql";
import { FlatList } from "react-native";

interface ListCharactersProps {
  data?: Maybe<Array<Maybe<Character>>>;
  getMoreData?: () => void;
}

export const ListCharacters = ({ data, getMoreData }: ListCharactersProps) => {
  return (
    <FlatList
      data={data}
      style={{ marginBottom: 100 }}
      renderItem={({ item }) => (
        <CharacterItem key={item?.id} character={item} />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={getMoreData}
    />
  );
};