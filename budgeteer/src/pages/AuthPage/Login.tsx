import React, { useState } from "react";
import TextInput from "../../components/input/TextInput";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/"); // Navigate to the dashboard after login
  };

  return (
    <>
      <section className="section">
        <div className="section-inner">
          <div className="pair left">
            <div className="auth-form">
              <h1 className="font-aeoik-bold brand-blue fs-30 mrgb">
                Welcome Back
              </h1>
              <p className="fs-16 brand-gray font-aeonik mrgb1">
                Login to your Budgeteer account
              </p>
              <form className="signup-form"> 
                <TextInput
                  text="Email Address"
                  placeholder="Email Address"
                  type="email"
                  icon="fe-at-sign"
                  hasIcon={true}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <PasswordInput
                  text="Password"
                  placeholder="Password"
                  icon="fe-lock"
                  hasIcon={true}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button 
                type="button"
                text="Login" 
                onClick={handleLogin} 
                />
                {/* <button
                type="button"
                onClick={handleLogin} 
                >Login</button> */}
              </form>
              <div className="auth-divider">
                <hr />
                <p className="fs-16 brand-blue font-aeonik">
                  Forgot Password?  
                </p>
                <hr />
              </div>
            </div>
            <div className="pair-divider">
              <p className="fs-16 font-aeonik mrgb1 mrgr6-mid">
                Dont have an account?
                <Link 
                  to="/signup"
                  className='brand-blue fs-16 font-aeonik'
                  >
                    Create Account
                  </Link>
              </p>
            </div>
          </div>

          <div className="pair right"></div>
        </div>
      </section>
    </>
  );
};

export default Login;
