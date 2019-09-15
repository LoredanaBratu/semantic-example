import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FirstButton from "./components/semantic/FirstEx";
import Breadcrumb from "./components/semantic/BreadCrumb";
import Accordion from "./components/semantic/Accordion";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Switch>
            <Route exact path="/" component={FirstButton} />
            <Route exact path="/breadcrumb" component={Breadcrumb} />
            <Route exact path="/accordion" component={Accordion} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
