import React, { useState, useContext, useEffect, useFetch } from "react";

const API_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_MUSIC_API_KEY}&format=json`;

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  //STATES FOR PARAMS
  const [user, setUser] = useState("rj");
  const [temp, setTemp] = useState("");
  const [album, setAlbum] = useState("nectar");
  const [artist, setArtist] = useState("joji");
  const [tag, setTag] = useState("pop");
  const [track, setTrack] = useState("booo");
  const [loading, setLoading] = useState(true);

  //STATES FOR USER DATA
  //ALBUM:
  const [albumInfo, setAlbumInfo] = useState([]);
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
  const [libraryArtists, setLibraryArtists] = useState([]);

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
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [userTopTags, setUserTopTags] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
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
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////DONT FORGET TO CHECK WHAT OTHER ADDITIONAL PARAMS
  /////////////////// I CAN ADD FOR ADDITIONAL INFORMATION
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //FETCHING ALBUM DATA
  // const [albumInfo, setalbumInfo] = useState([]);
  // const [albumTopTags, setAlbumTopTags] = useState([]);
  const fetchAlbumInfo = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}&method=album.getinfo&album=${album}&artist=${artist}`
      );
      const data = await response.json();
      setAlbumInfo(data.album);
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
        `${API_ENDPOINT}&user=${user}&method=album.gettoptags&album=${album}&artist=${artist}`
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
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=artist.getinfo&artist${artist}`
      );
      const data = await response.json();
      setArtistInfo(data.artist);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtistInfo();
  }, [user]);

  const fetchArtistAlbums = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=artist.gettopalbums`
      );
      const data = await response.json();
      setArtistInfo(data.topalbums.album);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtistAlbums();
  }, [user]);

  const fetchArtistTopTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=artist.gettoptracks&artist=${artist}`
      );
      const data = await response.json();
      setArtistTopTags(data.toptracks);
      setLoading(false);
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
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettopartists`
      );
      const data = await response.json();
      setChartArtists(data.artists);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartArtists();
  }, [user]);

  const fetchChartTopTags = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettoptags`
      );
      const data = await response.json();
      setChartTopTags(data.tags);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartTopTags();
  }, [user]);

  const fetchChartTopTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=chart.gettoptracks`
      );
      const data = await response.json();
      setChartTopTracks(data.tracks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChartTopTracks();
  }, [user]);

  //FETCH LIBRARY DATA
  //   const [libraryArtists, setLibraryArtists] = useState([])

  const fetchLibraryArtists = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=library.getartists`
      );
      const data = await response.json();
      setLibraryArtists(data.artists);
      setLoading(false);
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

  ///////////////////////////////////////
  ///////////DONT FORGET
  /////////FOR MOST OF THESE
  ///////////ADD TAG={TAG} IN HTML/JSX
  const fetchTagInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.getinfo&tag=${tag}`
      );
      const data = await response.json();
      setTagInfo(data.tag);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagInfo();
  }, [user]);

  const fetchTagSimilar = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.getsimilar&tag=${tag}`
      );
      const data = await response.json();
      setTagSimilar(data.tag);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagSimilar();
  }, [user]);

  const fetchTagTopAlbums = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.gettopalbums&tag=${tag}`
      );
      const data = await response.json();
      setTagTopAlbums(data.topalbums);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagTopAlbums();
  }, [user]);

  const fetchTagTopArtists = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.gettopartists&tag=${tag}`
      );
      const data = await response.json();
      setTagTopArtists(data.topalbums);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagTopArtists();
  }, [user]);

  const fetchTagTopTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.gettoptracks&tag=${tag}`
      );
      const data = await response.json();
      setTagTopTracks(data.toptracks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagTopTracks();
  }, [user]);

  const fetchTagWeeklyChartList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=tag.getweeklychartlist&tag=${tag}`
      );
      const data = await response.json();
      setTagWeeklyChartList(data.weeklychartlist);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTagWeeklyChartList();
  }, [user]);

  //SET TRACK DATA
  // const [trackInfo, setTrackInfo] = useState([]);
  // const [trackSimilar, setTrackSimilar] = useState([]);
  // const [trackTopTags, setTrackTopTags] = useState([]);

  const fetchTrackInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=track.getinfo&artist=${artist}&track=${track}`
      );
      const data = await response.json();
      setTrackInfo(data.track);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrackInfo();
  }, [user]);

  const fetchTrackSimilar = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=track.getsimilar&artist=${artist}&track=${track}`
      );
      const data = await response.json();
      setTrackInfo(data.similartracks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrackSimilar();
  }, [user]);

  const fetchTrackTags = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=track.gettoptags&artist=${artist}&track=${track}`
      );
      const data = await response.json();
      setTrackInfo(data.toptags);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrackTags();
  }, [user]);

  //FETCH USER DATA
  // const [userFriends, setUserFriends] = useState([]);
  // const [userInfo, setUserInfo] = useState([]);
  // const [userLovedTracks, setUserLovedTracks] = useState([]);
  // const [userRecentTracks, setUserRecentTracks] = useState([]);
  // const [userTopAlbums, setUserTopAlbums] = useState([]);
  // const [userArtists, setUserArtists] = useState([]);
  // const [userTopTags, setuserTopTags] = useState([]);
  // const [topTracks, setTopTracks] = useState([]);
  // const [userWeeklyAlbumChart, setUserWeeklyAlbumChart] = useState([]);
  // const [userWeeklyArtistChart, setUserWeeklyArtistChart] = useState([]);
  // const [userWeeklyChartList, setuserWeeklyChartList] = useState([]);
  // const [userWeeklyTrackChart, setUserWeeklyTrackChart] = useState([]);

  const fetchUserFriends = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.getfriends`
      );
      const data = await response.json();
      setUserFriends(data.friends);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserFriends();
  }, [user]);

  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.getinfo`
      );
      const data = await response.json();
      setUserInfo(data.user);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [user]);

  const fetchUserLovedTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.getlovedtracks`
      );
      const data = await response.json();
      setUserLovedTracks(data.lovedtracks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserLovedTracks();
  }, [user]);

  const fetchUserRecentTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.getrecenttracks`
      );
      const data = await response.json();
      setUserRecentTracks(data.recenttracks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserRecentTracks();
  }, [user]);

  const fetchUserTopAlbums = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettopalbums`
      );
      const data = await response.json();
      setUserTopAlbums(data.topalbums.album);
      console.log(userTopAlbums);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserTopAlbums();
  }, [user]);

  const fetchUserTopArtists = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettopartists`
      );
      const data = await response.json();
      setUserTopArtists(data.topartists);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserTopArtists();
  }, [user]);

  const fetchUserTopTags = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettoptags`
      );
      const data = await response.json();
      setUserTopTags(data.toptags);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserTopTags();
  }, [user]);

  const fetchUserTopTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_ENDPOINT}&user=${user}&method=user.gettoptracks`
      );
      const data = await response.json();
      setUserTopTracks(data.toptracks.track);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserTopTracks();
  }, [user]);

  return (
    <MusicContext.Provider
      value={{
        user,
        handleUserSet,
        submitUserName,
        API_ENDPOINT,
        userTopTracks,
        loading,
        userTopAlbums
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
