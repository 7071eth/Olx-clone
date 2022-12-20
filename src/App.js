import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./Pages/Signup";
import Create from "./Components/Create/Create";
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from "./store/Context";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/view">
          <View />
        </Route>
      </Router>
    </div>
  );
}

export default App;
