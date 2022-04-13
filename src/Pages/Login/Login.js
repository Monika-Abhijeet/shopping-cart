import React, { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("Monika");
  const [pwd, setPwd] = useState("Monika123");

  // async function login() {
  //   let isLogged = await checkIfUserIsValid();
  //   console.log(isLogged);
  //   if (isLogged) {
  //     console.log("m here");
  //     navigate("/home");
  //   } else {
  //     navigate("/failure");
  //     console.log("something went wrong");
  //   }
  // }

  async function login(e) {
    e.preventDefault();
    console.log("here");
    let requestBody = {
      name: username,
      username: password,
    };
    console.log("m user");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/uers",
        requestBody
      );
      navigate("/home");
    } catch {
      navigate("/home");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login}>Login</button>
      </form>
      <p>
        {" "}
        Not an existing user??{" "}
        <Link to="/signup">
          <span>Signup</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
