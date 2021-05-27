import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';
import './app.scss';
import { getData } from "./api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { initializeElements } from './store/store';
import { Main } from './Pages/Main';
export const App: FC = () => {

  useEffect(() => {
    getData().then((result) => initializeElements(result.data));
  }, []);

  return <Layout style={{ background: "rgb(220, 220, 220)" }}>
    <div className="layout">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {/* <Route path="/users">
          <Users />
        </Route> */}
        </Switch>
      </Router>
    </div>
  </Layout>
}
