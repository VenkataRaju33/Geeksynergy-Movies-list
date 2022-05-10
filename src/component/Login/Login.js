import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [isBlank, setIsBlank] = useState(false);
  const [isNull, setIsNull] = useState(false);
  const [EMessage, setEMessage] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [ErrMes, SetErrMes] = useState("");

  let navigate = useNavigate();

  const signupClicked = () => {
    navigate("/signup");
  };

  const GetName = (e) => {
    setName(e.target.value);
    setIsBlank(false);
    SetErrMes("");
  };
  const GetPassword = (e) => {
    setPassword(e.target.value);
    setIsNull(false);
    setEMessage("");
  };
  const LoginClicked = (e) => {
    let Lname = localStorage.getItem("name");
    let Lpassword = localStorage.getItem("password");

    if (!name) {
      setIsBlank(true);
      SetErrMes("Please Enter your name");
      return;
    }
    if (!password) {
      setIsNull(true);
      setEMessage("Please Enter Password");
      return;
    }
    if (Lname == name && Lpassword == password) {
      console.log("login successful");
      navigate("/dashboard");
    } else {
      setIsNull(true);
      setEMessage("Invalid Credentials");
    }
  };

  return (
    <div className="login-body">
      <div className="loginBox-grid">
        <div className="grid-form">
          <div className="label">Full Name</div>
          <TextField
            className="text-grid"
            id="outlined-basic"
            placeholder="Enter your name.."
            variant="outlined"
            onChange={GetName}
            error={isBlank}
            helperText={ErrMes}
          />
          <div className="label">Create a Password</div>
          <TextField
            className="text-grid"
            placeholder="Enter Password"
            variant="outlined"
            type="password"
            onChange={GetPassword}
            error={isNull}
            helperText={EMessage}
          />
        </div>
        <div className="button-grid">
          <Button variant="contained" color="primary" onClick={LoginClicked}>
            Login
          </Button>
          <Button variant="contained" color="primary" onClick={signupClicked}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
