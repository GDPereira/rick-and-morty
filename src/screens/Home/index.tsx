import { Card, Input } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loading } from "../../components/atoms/Loading";
import { ListCharacters } from "../../components/molecules/ListCharacters";
import { useCharacters } from "../../hooks/useCharacters";
import { useDebounce } from "../../hooks/useDebounce";
import { useFilterStore } from "../../zustand/filter";

export const Home = () => {
  const { results, loading, getMoreData } = useCharacters();
  const { setName } = useFilterStore();
  const { debouncedInputValue, setDebouncedInputValue } = useDebounce(setName);

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      {loading && <Loading />}
      {!loading && (
        <Card containerStyle={{ flex: 1 }}>
          <Card.Title h4>Rick and Morty Characters</Card.Title>
          <Input
            placeholder={"Filter"}
            onChangeText={setDebouncedInputValue}
            value={debouncedInputValue}
          />
          <ListCharacters data={results} getMoreData={getMoreData} />
        </Card>
      )}
    </SafeAreaView>
  );
};
