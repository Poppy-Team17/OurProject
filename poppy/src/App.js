import React from "react";
import "./App.css";
import Landing from "./pages/LandingPage.js"
import { CreateSurvey } from "./pages/CreateSurvey";
import { ExplorePage } from "./pages/ExplorePage";
import { GetSurvey } from "./pages/GetSurvey";
import { Profile } from "./pages/Profile";
import { SeeSurvey } from "./pages/SeeSurvey";
import { LearnPage } from "./pages/LearnPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import animationData from "./lottie/lot.json";

export class App extends React.Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <div className="topDesign"></div>
          <div>
            <Switch>
              <Route component={Landing} exact path="/" />
              <Route component={ExplorePage} path="/ExplorePage" />
              <Route component={CreateSurvey}  path="/CreateSurvey" />
              <Route component={GetSurvey} path="/GetSurvey" />
              <Route component={LearnPage} path="/LearnPage" />
              <Route component={Profile} path="/Profile" />
              <Route component={SeeSurvey} path="/SeeSurvey" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
