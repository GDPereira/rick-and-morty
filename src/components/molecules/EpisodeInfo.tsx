import { EpisodeListItem } from "@components/atoms/EpisodeListItem";
import type { Episode, Maybe } from "@generated/graphql";
import { ListItem } from "@rneui/themed";
import { useState } from "react";

interface EpisodeInfoProps {
  episodeList: Array<Maybe<Episode>>;
}

export const EpisodeInfo = ({ episodeList }: EpisodeInfoProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <ListItem.Accordion
      content={
        <ListItem.Content>
          <ListItem.Subtitle>Episodes List</ListItem.Subtitle>
        </ListItem.Content>
      }
      isExpanded={isExpanded}
      onPress={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {episodeList.map((episode) => {
        return <EpisodeListItem key={episode?.id} episode={episode} />;
      })}
    </ListItem.Accordion>
  );
};