import React from "react";
import "../assets/css/main.css";
import { ReactComponent as Logo } from "../assets/images/thumbnails/Logo.svg";
import { Link } from "react-router-dom";

function Signup() {

  return (
    <div className="App">
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container">
                <div className="card products_blc">
                  <div className="card-body">
                    <div className="card_content_wrap text-center"></div>
                    <div className="card_content_wrap text-center">
                      <div className="logo_wrap">
                        <Logo alt="Logo" />
                        <h6>Create an account</h6>
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
                              name="email"
                              placeholder="demo@gmail.com"
                              className="form-control input_modify"
                              id="exampleFormControlInput1"
                              value=""
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              placeholder="*****"
                              name="password"
                              className="form-control input_modify"
                              id="exampleFormControlInput2"
                              value=""
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span>Confirm
                              Password
                            </label>
                            <input
                              type="password"
                              name="confirmpassword"
                              className="form-control input_modify"
                              id="exampleFormControlInput3"
                              placeholder="*****"
                              value=""
                            />
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              type="button"
                              className="theme-btn-primary theme-btn"
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="already">
                            {" "}
                            <Link to="/login">Already have an Account</Link>
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

export default Signup;
