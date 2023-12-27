import { useState } from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const ValidateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      swAlert(<h2>los campos no pueden estar vacios</h2>);
    } else if (!ValidateEmail(email)) {
      swAlert(<h2>El formato del correo electrónico no es válido</h2>);
    } else if (password.length < 6) {
      swAlert(<h2>la contraseña debe tener 6 caracteres</h2>);
    } else {
      navigate("/listado");
    }
  };

  return (
    <div className="container m-5">
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
