import { ListItem } from "@rneui/themed";
import { useState } from "react";
import { Episode, Maybe } from "../__generated__/graphql";
import { EpisodeListItem } from "./EpisodeListItem";

interface EpisodeInfoProps {
  episodeList: Maybe<Episode>[];
}

export const EpisodeInfo = ({ episodeList }: EpisodeInfoProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <ListItem.Accordion
      content={
        <ListItem.Content>
          <ListItem.Subtitle>List Episodes</ListItem.Subtitle>
        </ListItem.Content>
      }
      isExpanded={isExpanded}
      onPress={() => setIsExpanded(!isExpanded)}
    >
      {episodeList.map((episode) => {
        return (
          <EpisodeListItem
            key={episode?.id}
            episode={episode}
          />
        );
      })}
    </ListItem.Accordion>
  );
};
