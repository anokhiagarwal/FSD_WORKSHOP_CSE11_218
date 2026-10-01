import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({
  currentUser,
  onLogout
}) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: "1",
      name: "Anokhi Agarwal",
      email: "anokhi@gmail.com",
      year: "2nd Year"
    },
    {
      id: "2",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      year: "3rd Year"
    },
    {
      id: "3",
      name: "Priya Singh",
      email: "priya@gmail.com",
      year: "1st Year"
    },
    {
      id: "4",
      name: "Aarav Gupta",
      email: "aarav@gmail.com",
      year: "4th Year"
    }
  ];

  // Search by name, email or year
  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase();

    return (
      student.name.toLowerCase().includes(search) ||
      student.email.toLowerCase().includes(search) ||
      student.year.toLowerCase().includes(search)
    );
  });

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      <div className="dashboard-container">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>
            <p className="small-heading">
              STUDENT PORTAL
            </p>

            <h1>
              USER DASHBOARD
            </h1>

            <p className="welcome-text">
              Welcome back, {currentUser.name}
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </header>


        {/* DASHBOARD CARD */}
        <section className="dashboard-card">

          <div className="table-title">

            <div>
              <h2>Student Details</h2>

              <p>
                View registered student information
              </p>
            </div>

            <span className="student-count">
              {filteredStudents.length} Students
            </span>

          </div>


          {/* SEARCH BAR */}
          <div className="search-container">

            <div className="search-box">

              <span className="search-icon">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search by name, email or year..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
              />

              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={() => setSearchTerm("")}
                >
                  ×
                </button>
              )}

            </div>

          </div>


          {/* TABLE */}
          <div className="table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>S. No.</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredStudents.length > 0 ? (

                  filteredStudents.map(
                    (student, index) => (

                      <tr
                        key={student.id}
                        className={
                          currentUser.id === student.id
                            ? "current-user"
                            : ""
                        }
                      >

                        <td>
                          {index + 1}
                        </td>

                        <td>

                          <div className="student-name">

                            <div className="avatar">
                              {student.name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <span>
                              {student.name}
                            </span>

                          </div>

                        </td>

                        <td>
                          {student.email}
                        </td>

                        <td>

                          <span className="year-badge">
                            {student.year}
                          </span>

                        </td>

                        <td>

                          {currentUser.id ===
                            student.id && (

                            <button
                              className="edit-btn"
                              onClick={() =>
                                navigate(
                                  `/edit/${student.id}`
                                )
                              }
                            >
                              Edit Details
                            </button>

                          )}

                        </td>

                      </tr>

                    )
                  )

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      className="no-results"
                    >
                      No students found
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;