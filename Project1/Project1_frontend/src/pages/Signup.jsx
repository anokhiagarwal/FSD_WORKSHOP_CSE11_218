import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Demo signup successful! You can now login."
    );

    navigate("/login");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="logo-circle">
          SV
        </div>

        <h1>CREATE ACCOUNT</h1>

        <p className="subtitle">
          Student Registration
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Student Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              required
            />

          </div>

          <div className="input-group">

            <label>Year</label>

            <select required>

              <option value="">
                Select your year
              </option>

              <option>
                1st Year
              </option>

              <option>
                2nd Year
              </option>

              <option>
                3rd Year
              </option>

              <option>
                4th Year
              </option>

            </select>

          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            CREATE ACCOUNT
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="demo-btn"
          onClick={() => navigate("/login")}
        >
          VIEW DEMO WEBSITE
        </button>

        <p className="switch-text">

          Already have an account?

          <button
            className="link-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </p>

      </div>

    </div>
  );
}

export default Signup;