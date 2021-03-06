import React from "react";
import { Header, Sidebar, Main } from './components';
import  NewPage  from './components/NewPage.js';
import { HashRouter as Router, Switch, Route, } from 'react-router-dom';
import './index.scss';

const MainContainer = () => (
  <div className="wrapper">
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  </div>
);

const NewContainer = () => (
  <div className="wrapper">
    <div className="container">
      <Header />
      <Sidebar />
      <NewPage />
    </div>
  </div>
);
export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/">
      <MainContainer/>
        </Route>
      
      <Route path="/dashboard">
        <MainContainer/>
          
        </Route>
        <Route path="/mytask" component={NewPage} >
          <NewContainer/>
        
          </Route>
          <Route path="/myproject" component={NewPage} >
          <NewContainer/>
        
          </Route>
          <Route path="/mywallet" component={NewPage} >
          <NewContainer/>
        
          </Route>
          <Route path="/historydata" component={NewPage} >
          <NewContainer/>
        
          </Route>
          <Route path="/invoice" component={NewPage} >
          <NewContainer/>
        
          </Route>
          <Route path="/helps" component={NewPage} >
          <NewContainer/>
        
          </Route>
          <Route path="/logout" component={NewPage} >
          <NewContainer/>
        
          </Route>
        
      </Switch>
    </Router>
  );
};


