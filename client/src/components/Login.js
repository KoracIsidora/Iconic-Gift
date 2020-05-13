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

  // return (
  // <div className="container">
  //   <form className="form-group">
  //     <label>Username: </label>
  //     <input
  //       className="form-control"
  //       type="text"
  //       placeholder="Username"
  //       required
  //       onInput={(e) => {
  //         setUsername(e.target.value);
  //       }}
  //     />
  //     <label>Password: </label>
  //     <input
  //       className="form-control"
  //       type="password"
  //       placeholder="Password"
  //       required
  //       onInput={(e) => {
  //         setPassword(e.target.value);
  //       }}
  //     />
  //     <p>{message}</p>
  //     <input
  //       className="btn btn-outline-secondary btn-lg"
  //       type="submit"
  //       value="Login"
  //       onClick={(e) => {
  //         e.preventDefault();
  //       }}
  //     />
  //   </form>
  // </div>
  // );

  return (
    <div className="container-fluid container">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3>
                    Uloguj se na stranicu Iconic Gift-a da vidiš više ideja za
                    poklon!
                  </h3>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
