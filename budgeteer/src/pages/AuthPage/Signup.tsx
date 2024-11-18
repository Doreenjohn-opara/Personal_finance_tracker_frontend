import React, { useState } from "react";
import TextInput from "../../components/input/TextInput";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
// import budgeteer from "";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <div className="pair left">
            <div className="auth-form">
              <h1 className="font-aeoik-bold brand-blue fs-30 mrgb">
                Create Your Account
              </h1>
              <p className="fs-16 brand-gray font-aeonik mrgb1">
                Setting up your account takes less than one minute
              </p>
              <form className="signup-form"> 
                <TextInput
                  text="Username"
                  placeholder="Username"
                  type="text"
                  hasIcon={true}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
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
                <Button text="Sign Up" onClick={(e) => {}} />
              </form>
              <div className="auth-divider">
                <hr />
                <p className="fs-16 font-aeonik">
                  Already have an Account?  
                  <Link 
                  to="/login"
                  className='brand-blue fs-16 font-aeonik'
                  >
                    Login
                  </Link>
                </p>
                <hr />
              </div>
            </div>
          </div>

          <div className="pair right"></div>
        </div>
      </section>
    </>
  );
};

export default Signup;
