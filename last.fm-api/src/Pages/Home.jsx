import React, { useState } from "react";
import { useMusicContext } from "../util/context";
import { Switch, Route } from "react-router-dom";
import Album from './Album';
import{ Link } from 'react-router-dom';


const Home = () => {
  const { user, handleUserSet, submitUserName, topTracks, fetchTopTracks } = useMusicContext();
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
      <Link to='/album'>
        link to albums
      </Link>
    </div>
    

  );
};

export default Home;
