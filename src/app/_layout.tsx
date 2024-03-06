import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"index"} />
          <Stack.Screen name={"character/[character]"} />
        </Stack>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;