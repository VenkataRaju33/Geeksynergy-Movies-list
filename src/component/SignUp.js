import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "../App.css";

function SignUp() {
  const [name, setName] = useState("");
  const [ErrMes, setErrMes] = useState("");
  const [isBlank, setIsBlank] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [mail, setMail] = useState("");
  const [ErroMessage, SetErroMessage] = useState("");
  const [number, setNumber] = useState("");
  const [isNill, setIsNill] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isNull, setIsNull] = useState(false);
  const [EMessage, setEMessage] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isClear, setIsClear] = useState(false);
  const [ErrorMes, setErrorMes] = useState("");
  const [isMatched, setIsMatched] = useState(false);
  const [Profession, setProfession] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    setProfession(e.target.value);
  };
  const GetName = (e) => {
    setName(e.target.value);
    setIsBlank(false);
    setErrMes("");
  };
  const GetMailId = (e) => {
    setMail(e.target.value);
    setIsEmpty(false);
    SetErroMessage("");
  };
  const GetPhoneNumber = (e) => {
    setNumber(e.target.value);
    setIsNill(false);
    setErrorMessage("");
  };
  const GetPassword = (e) => {
    setPassword(e.target.value);
    setIsNull(false);
    setEMessage("");
  };
  const GetRePassword = (e) => {
    setRePassword(e.target.value);
    setIsClear(false);
    setErrorMes("");
  };
  const SignUpClicked = (e) => {
    if (!name) {
      setIsBlank(true);
      setErrMes("Please enter the name");
      return;
    }
    if (!mail) {
      setIsEmpty(true);
      SetErroMessage("Please Enter the Mail ID");
      return;
    }
    if (!number) {
      setIsNill(true);
      setErrorMessage("Please Enter the Phone Number");
      return;
    }
    if (!password) {
      setIsNull(true);
      setEMessage("Please Enter Valid Password");
      return;
    }
    if (!rePassword) {
      setIsClear(true);
      setErrorMes("Please Re-Enter Your Password");
      return;
    }
    if (password != rePassword) {
      setIsMatched(true);
      setErrorMes("passwords did not Match");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("mail", mail);
    localStorage.setItem("number", number);
    localStorage.setItem("password", password);
    localStorage.setItem("rePassword", rePassword);
    localStorage.setItem("Profession", Profession);
    navigate("/");
    alert("signed up successfully, Please login...");
  };
  return (
    <div className="box-grid">
      <h1>Signup</h1>
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

        <div className="label">E-mail </div>
        <TextField
          className="text-grid"
          id="outlined-basic"
          placeholder="Enter your email.."
          variant="outlined"
          onChange={GetMailId}
          error={isEmpty}
          helperText={ErroMessage}
        />
        <div className="label">Phone Number</div>
        <TextField
          className="text-grid"
          id="outlined-basic"
          placeholder="Enter Your Number.."
          variant="outlined"
          onChange={GetPhoneNumber}
          error={isNill}
          helperText={ErrorMessage}
        />
        <div className="label">Create Password</div>
        <TextField
          className="text-grid"
          placeholder=" Enter your Password.."
          variant="outlined"
          type="password"
          onChange={GetPassword}
          error={isNull}
          helperText={EMessage}
        />
        <div className="label">Re-Enter Password</div>
        <TextField
          className="text-grid"
          placeholder="Enter your Password again.."
          variant="outlined"
          type="password"
          onChange={GetRePassword}
          error={isClear}
          helperText={ErrorMes}
        />
      </div>
      <div className="label">Profession</div>
      <FormControl style={{ width: "95%", marginTop: "5px" }}>
        <InputLabel>Profession</InputLabel>
        <Select value={Profession} label="Profession" onChange={handleChange}>
          <MenuItem value={"Student"}>Student</MenuItem>
          <MenuItem value={"Professor"}>Professor</MenuItem>
          <MenuItem value={"Trainer"}>Trainer</MenuItem>
          <MenuItem value={"Others"}>Others</MenuItem>
        </Select>
      </FormControl>{" "}
      <br />
      <Button
        variant="contained"
        style={{
          backgroundColor: "blue",
          color: "white",
          marginTop: "20px",
        }}
        onClick={SignUpClicked}
      >
        SignUp
      </Button>
    </div>
  );
}

export default SignUp;
