import React from "react";
import { useMusicContext } from "../util/context";

const Album = () => {
  const { userTopTracks} = useMusicContext();
  console.log(userTopTracks);
  return (
    <div>
      {userTopTracks.map((each, index) => {
        const { track, name} = each;
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
};

export default Album;