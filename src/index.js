import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NaviBar from "./components/navigation/Navi";
import Home from "./components/pages/Home";
import PlayerTable from "./components/pages/Players";
import DreamTeam from "./components/pages/DreamTeam";
import CreatorsTeam from "./components/pages/CreatorsTeam";
import PlayerInfo from "./components/pages/PlayerInfo";

const routing = (
  <Router>
    <MuiThemeProvider>
      <div>
        <NaviBar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/players" exact component={PlayerTable} />
          <Route path="/dreamteam" component={DreamTeam} />
          <Route path="/creatorsteam" component={CreatorsTeam} />
          <Route path="/players/:id/:name" component={PlayerInfo} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
