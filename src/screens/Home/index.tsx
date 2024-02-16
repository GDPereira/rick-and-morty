import { Card } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListCharacters } from "../../components/molecules/ListCharacters";
import { Loading } from "../../components/atoms/Loading";
import { useCharacters } from "../../hooks/useCharacters";

export const Home = () => {
  const { results, loading, getMoreData } = useCharacters();

  return (
    <SafeAreaView>
      {loading && <Loading />}
      {!loading && (
        <>
          <Card.Title h4>Rick and Morty Characters</Card.Title>
          <ListCharacters data={results} getMoreData={getMoreData} />
        </>
      )}
    </SafeAreaView>
  );
};
