import React from 'react'
import './App.css';
import TwitterFeed from "./components/twitter/twitterFeed";
import Roulette from "./components/roulette/roulette";
import Navbar from "./components/navbar/navbar"
import Home from "./components/home/home";
import Covid from "./components/covid/covid";

import {HashRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
      <HashRouter>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route path={["/","/home"]} exact component={Home} />
                  <Route path="/ruletka" exact component={Roulette} />
                  <Route path="/twitter" exact component={TwitterFeed} />
                  <Route path="/covid" exact component={Covid} />
              </Switch>
          </div>
      </HashRouter>
  );
}

export default App;