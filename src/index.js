import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PostContext from "./contexts/PostContext";
import UserContext from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostContext>
    <UserContext>
      <App />
    </UserContext>
  </PostContext>
);
