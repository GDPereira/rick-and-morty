import { Card } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { useCharacter } from "../../hooks/useCharacter";
import { CharacterListInfo } from "../atoms/CharacterListInfo";
import { EpisodeInfo } from "../molecules/EpisodeInfo";
import { LocationInfo } from "../molecules/LocationInfo";

interface CharacterDetailProps {
  characterId: string;
}

export const CharacterDetail = ({ characterId }: CharacterDetailProps) => {
  const { image, status, species, type, gender, location, episode } =
    useCharacter(characterId);

  return (
    <Card containerStyle={{ paddingBottom: 20, marginBottom: 80 }}>
      {image && (
        <Card.Image source={{ uri: image }} containerStyle={styles.image} />
      )}
      <CharacterListInfo information={"Status"} value={status} />
      <CharacterListInfo information={"Species"} value={species} />
      <CharacterListInfo information={"Type"} value={type} />
      <CharacterListInfo information={"Gender"} value={gender} />
      <Card.Divider style={{ marginTop: 20 }} />
      {location && <LocationInfo name={location.name} type={location.type} />}
      <Card.Divider style={{ marginTop: 20 }} />
      <EpisodeInfo episodeList={episode} />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
});
