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
import { InnerCard } from './Pages/InnerCard';
export const App: FC = () => {

  useEffect(() => {
    getData().then((result) => initializeElements(result.data));
  }, []);

  return <Layout style={{ background: "rgb(220, 220, 220)" }}>
    <div className="layout">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:order" component={InnerCard} />
        </Switch>
      </Router>
    </div>
  </Layout>
}
