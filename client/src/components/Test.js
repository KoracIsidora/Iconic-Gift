import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = () => {
  return (
    <div className="container-fluid container">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3>Uloguj se na stranicu Iconic Gift-a da vidiš više ideja za poklon!</h3>
                  <p className="text-muted mb-4">
                    
                  </p>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        autofocus=""
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
                      className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
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

export default Test;
