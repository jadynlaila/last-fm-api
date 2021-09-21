import React, { useState } from "react";
import { useMusicContext } from "../util/context";

const Home = () => {
  const { setUser, user, handleUserSet, submitUserName, topTracks, fetchTopTracks } = useMusicContext();
  return (
    <div className="home">
      <form onSubmit={(e) => e.preventDefault()} user={user}>
        <h2>Enter Your Last.fm Username!</h2>
        <input
          type="text"
          className="enter-user"
          onChange={(e) => handleUserSet(e.target.value)}
        ></input>
        <input type="submit" value="Submit" onClick={submitUserName}></input>
      </form>
      {/* {topTracks.map((each) => {
        const {track} = each;
        return(
          <h1>{track}</h1>
        )
      })} */}
    </div>
  );
};

export default Home;
