import React from 'react'
import './App.css';
import TwitterFeed from "./components/twitterFeed";
import Roulette from "./components/roulette";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Podkarpacie from "./components/podkarpacie";

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
                  <Route path="/podkarpacie" exact component={Podkarpacie} />
              </Switch>
          </div>
      </HashRouter>
  );
}

export default App;
