import React, { useState, useContext, useEffect, useFetch } from "react";

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_MUSIC_API_KEY}&format=json`;

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [user, setUser] = useState("rj");
  const [topTracks, setTopTracks] = useState("user.gettoptracks");
  const [temp, setTemp] = useState("");

  const handleUserSet = (value) => {
    setTemp(value);
  };

  const submitUserName = () => {
    setUser(temp);
  };

  const fetchTopTracks = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=${topTracks}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data.toptracks);
      setTopTracks(data.toptracks);
      console.log(topTracks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, [user]);

  return (
    <MusicContext.Provider
      value={{
        user,
        handleUserSet,
        submitUserName,
        API_ENDPOINT,
        topTracks,
        fetchTopTracks,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
