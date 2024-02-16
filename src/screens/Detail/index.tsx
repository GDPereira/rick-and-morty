import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTitle } from "../../components/molecules/HeaderTitle";
import { Loading } from "../../components/atoms/Loading";
import { useCharacter } from "../../hooks/useCharacter";
import { CharacterDetail } from "../../components/organisms/CharacterDetail";
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
