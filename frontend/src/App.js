import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import store from "./services/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GlobalStyles from "./styles/global";
import Middleware from "./services/Middleware";
import { observer } from "mobx-react";

function App() {
  Middleware(store);
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          {store.getUser() ? <Home store={store} /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login">
          {store.getUser() ? <Redirect to="/" /> : <Login store={store} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default observer(App);
