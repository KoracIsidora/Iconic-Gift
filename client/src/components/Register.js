import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = ({ setUser, history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [isSamePass, setIsSamePass] = useState(false);
  const [message, setMessage] = useState("");
  let poruka = "Passwords must be the same.";
  const [validEmail, setValidEm] = useState("");
  const [mail, setMail] = useState("");
  let porukica = "Invalid email!";
  let note = "*Password must have at least 8 letters and a number.";

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
    setIsSamePass(confirmPass === password);
  }, [confirmPass, password]);

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

  // function validMail() {
  //     if (validEmail === false) {
  //         setMail(porukica);
  //     }
  // }

  // function isItSame() {
  //     if (confirmPass !== password) {
  //         setMessage(poruka);
  //     }
  // }

  // function handleRegister() {
  //     if (!validPass || !isSamePass) return;
  //     register({ name, surname, username, email, password }).then(data => {
  //         if (data.success === true && validEmail === true) {
  //             setUser(data.user);
  //             history.push('/list');
  //         } else {
  //             console.log('Not registered!');
  //         }
  //     })
  // }

  return (
    <div className="container">
      <form className="form-group">
        <label>Name: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          required
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Surname: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Surname"
          required
          onInput={(e) => {
            setSurname(e.target.value);
          }}
        />
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
        <label>Email: </label>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          required
          onInput={(e) => {
            setEmail(e.target.value);
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
        <label>Confirm Password: </label>
        <input
          className="form-control"
          type="password"
          placeholder="Confirm password"
          required
          onInput={(e) => {
            setPass(e.target.value);
          }}
        />
        <p>{message}</p>
        <p>{mail}</p>
        <input
          className="btn btn-outline-secondary btn-lg"
          type="submit"
          value="Register"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
        <p>{note}</p>
      </form>
    </div>
  );
};

export default Register;
