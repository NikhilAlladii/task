import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

import Recipe from "./components/Recipe";
import SignUp from "./components/SignUp";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const signUpData = useSelector((state) => state.signUp.signUp[0]);
  let successMessage;
  const history = useHistory();

  useEffect(() => {
    signUpData && localStorage.setItem("logIn", "success");
    let successMessage = localStorage.getItem("logIn");
    if (successMessage === "success") {
      history.push("/signup");
    }
  }, []);



  return (
    <div>
      <Switch>
        <Route exact path="/recipes">
          <Recipe />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
