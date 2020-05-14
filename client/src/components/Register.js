import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { register } from "./service/Service";

const Register = ({ setUser, history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [isSamePass, setIsSamePass] = useState(false);
  const [message, setMessage] = useState("");
  let poruka = "Šifre moraju biti iste.";
  const [validEmail, setValidEm] = useState("");
  const [mail, setMail] = useState("");
  let porukica = "Neispravan email.";
  let note = "*Šifra mora sadržati 8 slova i broj.";
  let msg = "Sva polja moraju biti popunjena.";

  useEffect(() => {
    function isValidPw() {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(password)) {
        setValidPass(true);
      } else {
        setValidPass(false);
      }
    }
    isValidPw();
  }, [password]);

  useEffect(() => {
    setIsSamePass(confirm_password === password);
  }, [confirm_password, password]);

  useEffect(() => {
    function isValidEmail() {
      if (
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        setValidEm(true);
      } else {
        setValidEm(false);
      }
    }
    isValidEmail();
  }, [email]);

  function validMail() {
    if (validEmail === false) {
      setMail(porukica);
    }
  }

  function isItSame() {
    if (confirm_password !== password) {
      setMessage(poruka);
    }
  }

  function checkExisting() {
    if (!name && !surname && !username && !email && !password && !confirm_password) {
      setMessage(msg);
    }
  }

  function handleRegister() {
    register( {name, surname, username, email, password, confirm_password }).then(
      (data) => {
        if (data.success === true) {
          console.log("radi");
        } else {
          console.log("Not registered!");
        }
      }
    );
  }

  return (
    <div className="">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image img-fluid"></div>
        <div className="col-md-6">
          <div className="login d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3>Registruj se!</h3>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        id="inputName"
                        type="text"
                        placeholder="Ime"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        onInput={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputSurname"
                        type="text"
                        placeholder="Prezime"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        onInput={(e) => setSurname(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputUsername"
                        type="text"
                        placeholder="Korisničko ime"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        onInput={(e) => setUsername(e.target.value)}
                      />
                    </div>
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
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        onInput={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Potvrdi šifru"
                        required=""
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                        onInput={(e) => setPass(e.target.value)}
                      />
                    </div>
                    <p>{message}</p>
                    <button
                      type="submit"
                      className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        isItSame();
                        validMail();
                        checkExisting();
                        handleRegister();
                      }}
                    >
                      Registruj se
                    </button>
                    <p className="container text-danger">{note}</p>
                  </form>

                  <Link className="container-fluid" to="/login">
                    Postojeći korisnik? Uloguj se ovde
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

export default Register;
