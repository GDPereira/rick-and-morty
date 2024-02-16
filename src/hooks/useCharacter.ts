import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import { Character } from "../__generated__/graphql";

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
  const { data, loading } = useQuery(CHARACTER_QUERY, {
    variables: {
      id: id,
    },
  });

  const { name, status, species, type, gender, location, image, episode } =
    (data?.character ?? {}) as Character;

  return {
    loading,
    name,
    status,
    species,
    type,
    gender,
    location,
    image,
    episode,
  };
};
