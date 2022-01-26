import React from "react";
import SendInput from "./SendInput";
import UserPage from "./UsersPage";
import PostsPage from "./PostsPage";
import TopLinks from "./TopLinks";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Counter from "./counter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TopLinks />
        <Route path='/users' component={UserPage}/>
        <Route path='/posts' component={PostsPage}/>
        <Route path='/input' component={SendInput}/>
        <Route path='/counter' component={Counter}/>
      </div>
    </BrowserRouter>
    
    
  );
};

export default App;
