import { ThemeProvider } from "@rneui/themed";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Home } from "../screens/Home";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
};
