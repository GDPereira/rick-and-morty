import { CharacterListInfo } from "@components/atoms/CharacterListInfo";
import { Maybe } from "@generated/graphql";
import { Card } from "@rneui/themed";

interface LocationInfoProps {
  name?: Maybe<string>;
  type?: Maybe<string>;
}

export const LocationInfo = ({ name, type }: LocationInfoProps) => {
  return (
    <>
      <Card.FeaturedTitle style={{ color: "black" }}>
        Location
      </Card.FeaturedTitle>

      <CharacterListInfo information={"Name"} value={name} />
      <CharacterListInfo information={"Type"} value={type} />
    </>
  );
};
