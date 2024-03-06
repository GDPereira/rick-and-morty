import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loading } from "@components/atoms/Loading";
import { HeaderTitle } from "@components/molecules/HeaderTitle";
import { CharacterDetail } from "@components/organisms/CharacterDetail";
import { useCharacter } from "@hooks/useCharacter";
import { useLocalSearchParams } from "expo-router";
import { ErrorText } from "@components/atoms/Error";

export const Detail = () => {
  const local = useLocalSearchParams();
  const characterId = `${local.character as string}`;
  const { loading, name, error } = useCharacter(characterId);

  return (
    <SafeAreaView>
      <HeaderTitle title={name ?? ""} />
      {loading && <Loading />}
      {error && <ErrorText />}
      {!loading && !error && (
        <ScrollView>
          <CharacterDetail characterId={characterId} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};