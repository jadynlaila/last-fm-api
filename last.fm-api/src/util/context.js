import React, { useState, useContext } from "react";

const MusicContext = React.createContext();

export const MusicProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const handleUserSet = (value) => {
    setUser(value);
  }


  const consolecheck = () => {
      
      console.log(user)
  }
  return (
    <MusicContext.Provider value={{ user, setUser, handleUserSet, consolecheck}}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};








