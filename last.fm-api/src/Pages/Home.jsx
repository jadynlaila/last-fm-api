import React, { useState } from "react";
import { useMusicContext } from "../util/context";
import { Switch, Route } from "react-router-dom";
import Album from "./Album";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, handleUserSet, submitUserName, userTopAlbums } = useMusicContext();
  
    return (
      <div className="home">
        <form onSubmit={(e) => e.preventDefault()} user={user}>
          <h2>Enter Your Last.fm Username!</h2>
          <input
            type="text"
            className="enter-user"
            onChange={(e) => handleUserSet(e.target.value)}
          ></input>
          <Link to="/album">
            <input
              type="submit"
              value="Submit"
              onClick={submitUserName}
            ></input>
          </Link>
        </form>
      </div>
    );
};

export default Home;
