import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "http://localhost:8080/api/v1/hello",
  }).then((res) => {
    console.log(res);
  });
  return <div>Hello</div>;
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
