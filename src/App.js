import React from 'react'
import './App.css';
import TwitterFeed from "./components/twitterFeed";
import Roulette from "./components/roulette";

function App() {
  return (
    <div className="App">
          <Roulette />
        <TwitterFeed />
    </div>
  );
}

export default App;
