import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
