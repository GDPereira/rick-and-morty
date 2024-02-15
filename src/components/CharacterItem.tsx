import { Avatar, ListItem } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

interface CharacterItemProps {
  id?: string;
  image?: string;
  name?: string;
}

export const CharacterItem = ({ id, image, name }: CharacterItemProps) => {
  return (
    <ListItem
      Component={TouchableOpacity}
      bottomDivider
      onPress={() => {
        console.log("id :>> ", id);
      }}
      key={id}
    >
      <Avatar size={"medium"} rounded source={{ uri: image }} />
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};
