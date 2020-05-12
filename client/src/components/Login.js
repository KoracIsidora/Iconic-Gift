import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { login } from '../utilities/service';

const Login = ({ setUser, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let poruka = "Wrong username or password!";

  // function handleLogin() {
  //     login({ username, password }).then(data => {
  //         if (data.success === true) {
  //             setUser(data);
  //             history.push('/list');
  //         } else {
  //             setMessage(poruka);
  //         }
  //     })
  // }

  return (
    <div className="container">
      <form className="form-group">
        <label>Username: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          required
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password: </label>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          required
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>{message}</p>
        <input
          className="btn btn-outline-secondary btn-lg"
          type="submit"
          value="Login"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
};

export default Login;
