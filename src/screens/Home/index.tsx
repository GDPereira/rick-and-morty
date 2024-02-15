import { SafeAreaView } from "react-native-safe-area-context";
import { ListCharacters } from "../../components/ListCharacters";
import { Loading } from "../../components/Loading";
import { useCharacters } from "../../hooks/useCharacters";

export const Home = () => {
  const { loading } = useCharacters();

  return (
    <SafeAreaView>
      {loading && <Loading />}
      {!loading && <ListCharacters />}
    </SafeAreaView>
  );
};
