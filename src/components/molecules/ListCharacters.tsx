import { FlatList } from "react-native";
import { Character, Maybe } from "../../__generated__/graphql";
import { CharacterItem } from "../atoms/CharacterItem";

interface ListCharactersProps {
  data?: Maybe<Maybe<Character>[]>;
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
