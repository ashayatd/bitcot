import React from "react";
import { ReactComponent as Logo } from "../assets/images/thumbnails/Logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container">
                <div className="card products_blc">
                  <div className="card-body">
                    <div className="card_content_wrap text-center">
                      <div className="logo_wrap">
                        <Logo alt="Logo" />
                        <h6>
                          Don’t have an account yet?
                          <Link className="signUpSpan" to="/signup">
                            {" "}
                            Sign Up
                          </Link>
                        </h6>
                      </div>
                      <form>
                        <div className="form_wrapper">
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Email
                            </label>
                            <input
                              type="email"
                              className="form-control input_modify"
                              id="exampleFormControlInput1"
                              name="email"
                              placeholder="demo@demo.com"
                              value="" // This should be bound to a state variable
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput2"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              className="form-control input_modify"
                              name="password"
                              id="exampleFormControlInput1"
                              placeholder="********"
                              value="" // This should be bound to a state variable
                            />
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              type="button"
                              className="theme-btn-primary theme-btn"
                            >
                              Sign In
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
