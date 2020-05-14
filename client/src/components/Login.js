import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { login } from "../components/service/Service";

const Login = ({ setUser, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let poruka = "Pogrešan email ili korisnička šifra";

  function handleLogin() {
    login({ email, password }).then((data) => {
      if (data.success === true) {
        console.log("radi");
      } else {
        console.log("neradi");
      }
    });
  }

  function check() {
    console.log("daliradi");
  }

  return (
    <div className="">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image img-fluid"></div>
        <div className="col-md-6 container">
          <div className="login d-flex align-items-center">
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
                        placeholder="Email adresa"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        onInput={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Korisnička šifra"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        onInput={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        check();
                        handleLogin();
                      }}
                    >
                      Uloguj se
                    </button>
                  </form>
                  <Link className="container-fluid" to="/register">
                    Niste korisnik? Registrujte se ovde
                  </Link>
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
