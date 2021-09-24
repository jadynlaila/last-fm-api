import React from "react";
import { useMusicContext } from "../util/context";

const Album = () => {
  const { userTopTracks, loading, userTopAlbums} = useMusicContext();
  if (loading) {
    return <div>loading...</div>;
  } 
    return (
      <div className="topTracks">
        {userTopAlbums.map((each, index) => {
          const { name, artist, image, playcount } = each;
          return(
            <>
            <div key={index}>
              <h1>{name}</h1>
              <h3>{artist.name}</h3>
              <img src={image[1]['#text']} alt="albumImg" />
            </div>
            <h3>{playcount}</h3>

            </>
          ) 
        })}
      </div>
    );
  
};
export default Album;
