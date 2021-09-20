import React from "react";
import { useMusicContext } from "../util/context";

const Home = () => {
  const { setUser, user, handleUserSet, consolecheck } = useMusicContext();
  console.log(user);
  return (
    <div className="home">
      <form onSubmit={(e) => e.preventDefault()} user={user}>
        <h2>Enter Your Last.fm Username!</h2>
        <input
          type="text"
          className="enter-user"
          onChange={(e) => handleUserSet}
          value={user}
        ></input> 
        <input type="submit" value="Submit" onClick={consolecheck}></input>
    
      </form>
    </div>
  );
};

export default Home;
