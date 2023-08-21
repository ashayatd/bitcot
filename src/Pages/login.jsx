import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/thumbnails/Logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Email, Password } from '../reducers/userReducer';
import ProductService from "../services/productService";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const email_State = useSelector(Email);
  const password_State = useSelector(Password);

  const Navigate = useNavigate();

  const generateToken = () => {
    const min = 46556523;
    const max = 56556523; // Generating a Token
    localStorage.setItem("token", Math.floor(Math.random() * (max - min)) + min);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === email_State && password === password_State) {
      generateToken();
      ProductService();
      console.log("productservice Executed");
      setTimeout(() => {
        Navigate('/product');
      }, 300);
      

    } else {
      alert("Invalid email or password");
    }
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
                      <form onSubmit={handleSubmit}>
                        <div className="form_wrapper">
                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Email
                            </label>
                            <input
                              type="email"
                              className="form-control input_modify"
                              id="email"
                              name="email"
                              placeholder="demo@demo.com"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              required // Add form validation
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="password"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              className="form-control input_modify"
                              id="password"
                              name="password"
                              placeholder="********"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              required // Add form validation
                            />
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              type="submit"
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
