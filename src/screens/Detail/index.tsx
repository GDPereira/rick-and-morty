import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTitle } from "../../components/HeaderTitle";
import { Loading } from "../../components/Loading";
import { useCharacter } from "../../hooks/useCharacter";
import { CharacterDetail } from "../../components/CharacterDetail";
import { useLocalSearchParams } from "expo-router";

export const Detail = () => {
  const local = useLocalSearchParams();
  const characterId = `${local.character}`;
  const { loading, name } = useCharacter(characterId);

  return (
    <SafeAreaView>
      <HeaderTitle title={name ?? ""} />
      {loading && <Loading />}
      {!loading && (
        <ScrollView>
          <CharacterDetail characterId={characterId} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
