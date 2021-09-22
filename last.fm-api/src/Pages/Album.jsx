import React from "react";
import { useMusicContext } from "../util/context";

const Album = () => {
  const { topTracks} = useMusicContext();
  console.log(topTracks);
  return (
    <div>
      {topTracks.map((each, index) => {
        const { track, name} = each;
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
};

export default Album;