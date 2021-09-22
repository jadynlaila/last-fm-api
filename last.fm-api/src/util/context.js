import React, { useState, useContext, useEffect, useFetch } from "react";

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_MUSIC_API_KEY}&format=json`;

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [user, setUser] = useState("rj");
  const [temp, setTemp] = useState("");

  //ALBUM:
  const [albumInfo, setalbumInfo] = useState([]);
  const [albumTopTags, setAlbumTopTags] = useState([]);

  //ARTIST:
  const [artistInfo, setArtistInfo] = useState([]);
  const [artistTopTags, setArtistTopTags] = useState([]);
  const [artistSimilar, setArtistSimilar] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [artistTopTracks, setArtistTopTracks] = useState([]);

  //CHART:
  const [chartArtists, setChartArtists] = useState([]);
  const [chartTopTags, setChartTopTags] = useState([]);
  const [chartTopTracks, setChartTopTracks] = useState([]);

  //LIBRARY
  const [libraryArtists, setLibraryArtists] = useState([])

  const [topTracks, setTopTracks] = useState([]);
  const [globalTopTracks, setGlobalTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  const handleUserSet = (value) => {
    setTemp(value);
  };

  const submitUserName = () => {
    setUser(temp);
  };

  //ALBUMS:

  const albumGetInfo = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=album.getinfo`
      );
      console.log(response);
      const data = await response.json();
      setTopTracks(data.toptracks.album);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    albumGetInfo();
  }, [user]);

  const fetchTopTracks = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettoptracks`
      );
      console.log(response);
      const data = await response.json();
      console.log(data.toptracks);
      setTopTracks(data.toptracks.track);
      console.log(topTracks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopTracks();
  }, [user]);

  const fetchGlobalTopTracks = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettoptracks`
      );
      console.log(response);
      const data = await response.json();
      console.log(data.toptracks);
      setTopTracks(data.toptracks.track);
      console.log(topTracks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGlobalTopTracks();
  }, [user]);

  const fetchGlobalTopArtists = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettopartists`
      );
      console.log(response);
      const data = await response.json();
      console.log(data.toptracks);
      setTopTracks(data.toptracks.artist);
      console.log(topTracks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGlobalTopArtists();
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
