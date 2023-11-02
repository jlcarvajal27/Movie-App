import { useState } from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      swAlert(<h2>los campos no pueden estar vacios</h2>);
    }

    if (isValidEmail(email) && isValidPassword(password)) {
      swAlert(<h2>Email y contraseña válidos</h2>);
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h2>datos invalidos </h2>);
      return;
    }
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/listado");
      });
  };

  let token = sessionStorage.getItem("token");

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    return password.length <= 6;
  };

  return (
    <div className="container m-5">
      {token && <Navigate to="/listado" />}
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="text-center m-2 fw-bold">React Movie </h1>
          <form onSubmit={handleSubmit}>
            <label className="form-label d-block mt-2">
              <span className="fw-semibold ">Email</span>
              <input
                className="form-control my-1"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="form-label d-block mt-2">
              <span className="fw-semibold">Password</span>
              <input
                className="form-control my-1"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <button className="btn btn-primary mt-2 " type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
