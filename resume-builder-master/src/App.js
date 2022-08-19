import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/Navbar/nav";
import { useState } from "react";

import "./App.css";

import {BrowserRouter as Router,Route,Switch } from "react-router-dom"

function App() {

  const [user,setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  >
            {
              user && user._id? [<Navbar setLoginUser={setLoginUser}/>,<Header setLoginUser={setLoginUser}/>,<Body setLoginUser={setLoginUser}/>] : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route exact path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route> 
          <Route exact path="/register" ><Register /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
