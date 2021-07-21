import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "../Home";

import { AddBranch } from "../AddBranch";
import { EditBranch } from "../EditBranch";

function Login() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  const [details, setDetails] = useState({
    emailAddress: "",
    password: "",
  });
  const history = useHistory();

  const Logout = () => {
    console.log("Logout");
    removeUserLocalStorage();
    setUser();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    axios
      .post("https://staging.bfitds.com/api/auth", {
        emailAddress: details.emailAddress,
        password: details.password,
      })
      .then((res) => {
        console.log(res);
        setUserLocalStorage(res.data.token, res.data.user);
        setUser(res.data);

        if (res.data.statusText === "OK") {
          setDetails(res.data.details);
          setLoading(true);
          history.push("/Home");

          console.log();
        } else {
          console.log();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  if (user) {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/Login">
                  <Login />
                </Route>
                <Route path="/add">
                  <AddBranch />
                </Route>
                <Route path="/edit/:id">
                  <EditBranch />
                </Route>
              </Switch>
            </Router>
          </div>
        </BrowserRouter>

        <Button onClick={Logout}>Logout</Button>
      </div>
    );
  }
  return (
    <div className="loginParentDiv">
      <h1>Login </h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          onChange={(e) =>
            setDetails({ ...details, emailAddress: e.target.value })
          }
          value={details.emailAddress}
          id="email"
          name="email"
          defaultValue="admin"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />

        <input
          className="input"
          type="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          id="password"
          name="password"
          defaultValue="1"
        />
        <br />
        <br />
        <button type="submit" value="LOGIN" onClick={submitHandler}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
export const setUserLocalStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  return localStorage.getItem("token") || null;
};
export const removeUserLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
