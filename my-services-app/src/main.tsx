import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.tsx";
import Spinner from "./components/Spinner/Spinner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
