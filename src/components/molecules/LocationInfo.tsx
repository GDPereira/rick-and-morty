import { Card } from "@rneui/themed";
import { CharacterListInfo } from "../atoms/CharacterListInfo";
import { Maybe } from "../../__generated__/graphql";

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
