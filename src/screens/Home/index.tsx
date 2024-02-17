import { Loading } from "@components/atoms/Loading";
import { ListCharacters } from "@components/molecules/ListCharacters";
import { useCharacters } from "@hooks/useCharacters";
import { useDebounce } from "@hooks/useDebounce";
import { Card, Input } from "@rneui/themed";
import { useFilterStore } from "@zustand/filter";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  const { results, loading, getMoreData } = useCharacters();
  const { setName } = useFilterStore();
  const { debouncedInputValue, setDebouncedInputValue } = useDebounce(setName);

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <Card containerStyle={{ flex: 1 }}>
        <Card.Title h4>Rick and Morty Characters</Card.Title>
        <Input
          placeholder={"Filter"}
          onChangeText={setDebouncedInputValue}
          value={debouncedInputValue}
        />
        {loading && <Loading />}
        {!loading && (
          <>
            <ListCharacters data={results} getMoreData={getMoreData} />
          </>
        )}
      </Card>
    </SafeAreaView>
  );
};
