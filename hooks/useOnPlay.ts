import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useSubscribeModel from "./useSubscribeModel";
import useAuthModel from "./useAuthModel";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const subscribeModel = useSubscribeModel();
  const authModel = useAuthModel();
  const { subscription, user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModel.onOpen();
    }

    if (!subscription) {
      return subscribeModel.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }

  return onPlay;
};

export default useOnPlay;