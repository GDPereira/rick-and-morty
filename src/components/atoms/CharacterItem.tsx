import type { Character, Maybe } from "@generated/graphql";
import { Avatar, ListItem } from "@rneui/themed";
import { useRouter } from "expo-router";
import { useMemo } from "react";
import { TouchableOpacity } from "react-native";

interface CharacterItemProps {
  character: Maybe<Character>;
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`character/${character?.id}`);
  };

  return useMemo(
    () => (
      <ListItem
        Component={TouchableOpacity}
        bottomDivider
        onPress={handlePress}
        key={character?.id}
      >
        {character?.image && (
          <Avatar size={"medium"} rounded source={{ uri: character.image }} />
        )}
        <ListItem.Content>
          <ListItem.Title>{character?.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ),
    [character?.id],
  );
};
