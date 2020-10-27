import React from 'react'
import './App.css';
import TwitterFeed from "./components/twitterFeed";
import Roulette from "./components/roulette";
import Navbar from "./components/navbar";
import Home from "./components/home";

import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route path={["/koronaRuletka/","/koronaRuletka/home"]} exact component={Home} />
                  <Route path="/koronaRuletka/ruletka" component={Roulette} />
                  <Route path="/koronaRuletka/twitter" exact component={TwitterFeed} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
