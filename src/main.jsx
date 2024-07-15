import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import './index.css';
import { ContentProvider } from "./context/contentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <ContentProvider>
        <RouterProvider router={router} />
      </ContentProvider>
    </React.StrictMode>
  </React.StrictMode>
);
