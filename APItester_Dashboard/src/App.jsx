import { useState } from "react";

const PROXY_URL = "http://localhost:4000/proxy";

function App() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState(null);
  const [ok, setOk] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    if (url === "") {
      setResponse("Please enter an API URL");
      setStatus(null);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Send the request to our own proxy server instead of the target
      // URL directly — the proxy makes the real request server-to-server,
      // which isn't subject to browser CORS restrictions.
      const proxyRequestUrl = `${PROXY_URL}?url=${encodeURIComponent(url)}&method=${method}`;
      const result = await fetch(proxyRequestUrl);
      const data = await result.text();

      let display = data;
      try {
        display = JSON.stringify(JSON.parse(data), null, 2);
      } catch (e) {
        // not JSON, show as-is
      }

      setResponse(display || "(empty response)");
      setStatus(result.status);
      setOk(result.ok);
    } catch (error) {
      setResponse(
        "Error: " + error.message + "\n\n(Is the proxy server running? npm start in the /server folder)"
      );
      setStatus("ERR");
      setOk(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "24px"
      }}
    >
      <div
        style={{
          width: "700px",
          maxWidth: "100%",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "35px"
          }}
        >
          API Tester
        </h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            style={{
              width: "100px",
              height: "45px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              textAlign: "center"
            }}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input
            type="text"
            placeholder="Enter API URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              flex: "1",
              minWidth: "200px",
              height: "45px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              textAlign: "center"
            }}
          />

          <button
            onClick={sendRequest}
            disabled={loading}
            style={{
              height: "45px",
              padding: "0 18px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#222",
              color: "white",
              fontSize: "16px",
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </div>

        <div style={{ marginTop: "35px", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <h2 style={{ margin: "0", fontSize: "24px" }}>Response</h2>

            {status !== null && (
              <span
                style={{
                  backgroundColor: ok ? "#28a745" : "#d9363e",
                  color: "white",
                  padding: "7px 16px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                {status}
              </span>
            )}
          </div>

          <div
            style={{
              marginTop: "15px",
              minHeight: "220px",
              maxHeight: "400px",
              width: "100%",
              backgroundColor: "black",
              color: response ? "white" : "#999",
              borderRadius: "10px",
              padding: "18px",
              fontFamily: "monospace",
              fontSize: "14px",
              overflowY: "auto",
              whiteSpace: "pre-wrap",
              textAlign: response ? "left" : "center",
              display: response ? "block" : "flex",
              alignItems: response ? "stretch" : "center",
              justifyContent: response ? "flex-start" : "center",
              boxSizing: "border-box"
            }}
          >
            {response || "Response will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;