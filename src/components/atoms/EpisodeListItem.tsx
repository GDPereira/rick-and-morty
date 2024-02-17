import { Episode, Maybe } from "@generated/graphql";
import { ListItem } from "@rneui/themed";
import { useMemo } from "react";

interface EpisodeListItemProps {
  episode?: Maybe<Episode>;
}

export const EpisodeListItem = ({ episode }: EpisodeListItemProps) => {
  return useMemo(
    () => (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Subtitle>Name: {episode?.name}</ListItem.Subtitle>
          <ListItem.Subtitle>Air date: {episode?.air_date}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ),
    [episode?.id]
  );
};
