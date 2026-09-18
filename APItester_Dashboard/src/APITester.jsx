import { useState } from "react";

function APITester() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    if (url === "") {
      setResponse("Please enter an API URL");
      return;
    }

    try {
      const result = await fetch(url, {
        method: method,
      });

      const data = await result.text();

      setResponse(data);
    } catch (error) {
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main Container */}
      <div
        style={{
          width: "700px",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            margin: "0 0 35px 0",
            fontSize: "32px",
          }}
        >
          API Tester
        </h1>

        {/* Request Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Dropdown */}
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            style={{
              width: "100px",
              height: "45px",
              padding: "0 10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "white",
              fontSize: "16px",
            }}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>

          {/* URL Input */}
          <input
            type="text"
            placeholder="Enter API URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              flex: "1",
              height: "45px",
              padding: "0 15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
            }}
          />

          {/* Send Request */}
          <button
            onClick={sendRequest}
            style={{
              height: "45px",
              padding: "0 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#222",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Send Request
          </button>
        </div>

        {/* Response Section */}
        <div
          style={{
            width: "100%",
            marginTop: "35px",
          }}
        >
          {/* Response Heading + Status */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: "0",
                fontSize: "24px",
              }}
            >
              Response
            </h2>

            {/* 200 */}
            <span
              style={{
                padding: "7px 17px",
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              200
            </span>
          </div>

          {/* Black Response Box */}
          <div
            style={{
              width: "100%",
              height: "220px",
              marginTop: "15px",
              padding: "18px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              fontFamily: "monospace",
              fontSize: "14px",
              textAlign: "left",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            {response || "Response will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default APITester;