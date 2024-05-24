import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FormComponent} />
          <Route path="/success" component={Success} />
        </Switch>
        <h1>SignUp Form</h1>
      </div>
    </Router>
  );
};

export default App;
