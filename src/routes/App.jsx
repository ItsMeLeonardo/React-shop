import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import "../styLes/gLobaL.scss";
// TODO: merge the mobile menu with header class => 11 & 8
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
