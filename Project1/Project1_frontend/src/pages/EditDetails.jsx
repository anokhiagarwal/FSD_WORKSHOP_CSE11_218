import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditDetails({ currentUser }) {

  const navigate = useNavigate();

  const [name, setName] =
    useState(currentUser.name);

  const [email, setEmail] =
    useState(currentUser.email);

  const [year, setYear] =
    useState(currentUser.year);

  const handleSubmit = (e) => {

    e.preventDefault();

    const updatedUser = {
      ...currentUser,
      name,
      email,
      year
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    alert(
      "Your details have been updated!"
    );

    navigate("/dashboard");
  };

  return (

    <div className="auth-page">

      <div className="auth-card edit-card">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          ← Back to Dashboard
        </button>

        <div className="logo-circle">
          SV
        </div>

        <h1>EDIT DETAILS</h1>

        <p className="subtitle">
          Update your personal information
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Student Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div className="input-group">

            <label>Year</label>

            <select
              value={year}
              onChange={(e) =>
                setYear(e.target.value)
              }
            >

              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>

            </select>

          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            SAVE CHANGES
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            CANCEL
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditDetails;