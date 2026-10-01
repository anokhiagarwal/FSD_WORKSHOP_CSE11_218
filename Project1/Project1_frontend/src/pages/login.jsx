import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const demoUsers = [
    {
      id: "1",
      name: "Anokhi Agarwal",
      email: "anokhi@gmail.com",
      password: "123456",
      year: "2nd Year"
    },
    {
      id: "2",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      password: "123456",
      year: "3rd Year"
    },
    {
      id: "3",
      name: "Priya Singh",
      email: "priya@gmail.com",
      password: "123456",
      year: "1st Year"
    }
  ];

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");

    const user = demoUsers.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!user) {

      setError(
        "Invalid email or password."
      );

      return;
    }

    onLogin(user);

    navigate("/dashboard");
  };

  const handleDemoLogin = () => {

    const demoUser = demoUsers[0];

    onLogin(demoUser);

    navigate("/dashboard");
  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="logo-circle">
          SV
        </div>

        <h1>WELCOME BACK</h1>

        <p className="subtitle">
          Student Login
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-btn"
          >
            LOGIN
          </button>

        </form>

        <button
          className="demo-btn"
          onClick={handleDemoLogin}
        >
          ENTER DEMO DASHBOARD
        </button>

        <p className="demo-info">
          Demo: anokhi@gmail.com / 123456
        </p>

        <p className="switch-text">

          Don't have an account?

          <button
            className="link-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

        </p>

      </div>

    </div>
  );
}

export default Login;