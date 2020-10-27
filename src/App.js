import React from 'react'
import './App.css';
import TwitterFeed from "./components/twitterFeed";
import Roulette from "./components/roulette";
import Navbar from "./components/navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route path="/ruletka" exact component={Roulette} />
                  <Route path="/twitter" exact component={TwitterFeed} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
