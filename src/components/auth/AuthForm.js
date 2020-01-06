import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    minWidth: "200px",
    margin: "10px auto"
  }
});

export default function AuthForm(props) {
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password2: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit}>
        <InputLabel htmlFor="username">Username:</InputLabel>
        <Input
          id="username"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <InputLabel htmlFor="password">Password:</InputLabel>
        <Input
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        {!props.isLogin && (
          <>
            <InputLabel htmlFor="password2">Confirm Password:</InputLabel>
            <Input
              id="password2"
              type="password"
              name="password2"
              value={credentials.password2}
              onChange={handleChange}
            />
          </>
        )}

        <Button type="submit">{props.isLogin ? "Login" : "Register"}</Button>
      </form>
    </div>
  );
}
