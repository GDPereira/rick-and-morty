import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { Characters } from "../__generated__/graphql";

const CHARACTERS_QUERY = gql(
  `query GetCharacters($page: Int) {
  characters(page: $page) {
    info {
      next
    }
    results {
      id
      name
      image
    }
  }
}`
);

export const useCharacters = () => {
  const { data, loading, fetchMore } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page: 1,
    },
  });

  const { results, info } = (data?.characters ?? {}) as Characters;

  const getMoreData = () => {
    fetchMore({
      variables: { page: info?.next },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult.characters?.results) {
          return previousQueryResult;
        }

        const oldResults = previousQueryResult.characters?.results ?? [];
        const newResults = fetchMoreResult.characters?.results ?? [];

        const mergedResults = [...oldResults];

        newResults.forEach((newResult) => {
          const existsInList = oldResults.some(
            (oldResult) => newResult?.id === oldResult?.id
          );

          !existsInList && mergedResults.push(newResult);
        });

        fetchMoreResult.characters.results = mergedResults;

        return fetchMoreResult;
      },
    });
  };

  return {
    results,
    loading,
    getMoreData,
  };
};
