import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/thumbnails/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail, setPassword } from "../actions/userAction";

function Signup() {
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();

  const dispatch = useDispatch();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignup = (e) => {
        
    e.preventDefault();
    // password and confirm password check
    if (userpassword !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!emailRegex.test(useremail)) {
      alert("Invalid email address");
    } else {
      dispatch(setEmail(useremail));
      dispatch(setPassword(userpassword));
      Navigate('/login');
    }


    // All checks passed, proceed with signup
    console.log("Signup button clicked!");
    console.log("Email:", useremail);
    console.log("Password:", userpassword);
  };

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
                              value={useremail}
                              onChange={(e) => setUseremail(e.target.value)}
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
                              value={userpassword}
                              onChange={(e) => setUserpassword(e.target.value)}
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
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              type="button"
                              className="theme-btn-primary theme-btn"
                              onClick={handleSignup}
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="already">
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
