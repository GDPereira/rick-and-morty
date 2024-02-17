import { useQuery } from "@apollo/client";
import { gql } from "@generated/gql";
import { Character } from "@generated/graphql";

const CHARACTER_QUERY = gql(
  `query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      location {
        name
        type
      }
      image
      episode {
        name
        air_date
        id
      }
    }
  }`
);

export const useCharacter = (id: string) => {
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      id: id,
    },
  });

  const characterInfo = (data?.character ?? {}) as Character;

  return {
    loading,
    error,
    ...characterInfo,
  };
};
