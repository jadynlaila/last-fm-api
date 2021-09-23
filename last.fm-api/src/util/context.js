import React, { useState, useContext, useEffect, useFetch } from "react";

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_MUSIC_API_KEY}&format=json`;

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  //STATES FOR PARAMS
  const [user, setUser] = useState("rj");
  const [temp, setTemp] = useState("");
  const [album, setAlbum] = useState('');
  const [artist, setArtist] = useState('');
  const [tag, setTag] = useState('');

  //STATES FOR USER DATA
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

  //TAG
  const [tagInfo, setTagInfo] = useState([]);
  const [tagSimilar, setTagSimilar] = useState([]);
  const [tagTopAlbums, setTagTopAlbums] = useState([]);
  const [tagTopArtists, setTagTopArtists] = useState([]);
  const [tagTopTags, setTagTopTags] = useState([]);
  const [tagTopTracks, setTagTopTracks] = useState([]);
  const [tagWeeklyChartList, setTagWeeklyChartList] = useState([]);

  //TRACK
  const [trackInfo, setTrackInfo] = useState([]);
  const [trackSimilar, setTrackSimilar] = useState([]);
  const [trackTopTags, setTrackTopTags] = useState([]);

  //USER
  const [userFriends, setUserFriends] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [userLovedTracks, setUserLovedTracks] = useState([]);
  const [userRecentTracks, setUserRecentTracks] = useState([]);
  const [userTopAlbums, setUserTopAlbums] = useState([]);
  const [userArtists, setUserArtists] = useState([]);
  const [userTopTags, setuserTopTags] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [userWeeklyAlbumChart, setUserWeeklyAlbumChart] = useState([]);
  const [userWeeklyArtistChart, setUserWeeklyArtistChart] = useState([]);
  const [userWeeklyChartList, setuserWeeklyChartList] = useState([]);
  const [userWeeklyTrackChart, setUserWeeklyTrackChart] = useState([]);


  //SETTING USERNAME SO WE KNOW WHO TO GET DATA FOR
  const handleUserSet = (value) => {
    setTemp(value);
  };

  const submitUserName = () => {
    setUser(temp);
  };

  //FETCHING ALBUM DATA
  // const [albumInfo, setalbumInfo] = useState([]);
  // const [albumTopTags, setAlbumTopTags] = useState([]);
  const fetchAlbumInfo = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=album.getinfo&album=${album}&artist=${artist}`
      );
      const data = await response.json();
      setalbumInfo(data.album);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbumInfo();
  }, [user]);

  const fetchAlbumTopTags = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=album.gettoptags`
      );
      const data = await response.json();
      setAlbumTopTags(data.toptags);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbumTopTags();
  }, [user]);


  //FETCHING ARTIST DATA
  // const [artistInfo, setArtistInfo] = useState([]);
  // const [artistTopTags, setArtistTopTags] = useState([]);
  // const [artistSimilar, setArtistSimilar] = useState([]);
  // const [artistAlbums, setArtistAlbums] = useState([]);
  // const [artistTopTracks, setArtistTopTracks] = useState([]);


  const fetchArtistInfo = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=album.gettoptags`
      );
      const data = await response.json();
      setArtistInfo(data.artist);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtistInfo();
  }, [user]);

  const fetchArtistAlbums = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=artist.gettopalbums`
      );
      const data = await response.json();
      setArtistInfo(data.topalbums);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtistAlbums();
  }, [user]);

  const fetchArtistTopTracks = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=artist.toptracks`
      );
      const data = await response.json();
      setArtistTopTags(data.toptracks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtistTopTracks();
  }, [user]);
  
  //FETCHING CHART DATA
  // const [chartArtists, setChartArtists] = useState([]);
  // const [chartTopTags, setChartTopTags] = useState([]);
  // const [chartTopTracks, setChartTopTracks] = useState([]);


  const fetchChartArtists = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettopartists`
      );
      const data = await response.json();
      setChartArtists(data.artists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartArtists();
  }, [user]);

  const fetchChartTopTags = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettoptags`
      );
      const data = await response.json();
      setChartTopTags(data.tags);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartTopTags();
  }, [user]);

  const fetchChartTopTracks = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettoptracks`
      );
      const data = await response.json();
      setChartTopTracks(data.tracks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartTopTags();
  }, [user]);


  //FETCH LIBRARY DATA
  //   const [libraryArtists, setLibraryArtists] = useState([])  

  const fetchLibraryArtists = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=library.getartists`
      );
      const data = await response.json();
      setLibraryArtists(data.artists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLibraryArtists();
  }, [user]);


  //FETCH TAG DATA
  // const [tagInfo, setTagInfo] = useState([]);
  // const [tagSimilar, setTagSimilar] = useState([]);
  // const [tagTopAlbums, setTagTopAlbums] = useState([]);
  // const [tagTopArtists, setTagTopArtists] = useState([]);
  // const [tagTopTags, setTagTopTags] = useState([]);
  // const [tagTopTracks, setTagTopTracks] = useState([]);
  // const [tagWeeklyChartList, setTagWeeklyChartList] = useState([]);

  const fetchTagInfo = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.getinfo&tag=${tag}`
      );
      const data = await response.json();
      setTagInfo(data.artists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagInfo();
  }, [user]);















  const fetchTopTracks = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettoptracks`
      );
      const data = await response.json();
      setTopTracks(data.toptracks.track);
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
      const data = await response.json();
      setTopTracks(data.toptracks.track);
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
      const data = await response.json();
      setTopTracks(data.toptracks.artist);
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
