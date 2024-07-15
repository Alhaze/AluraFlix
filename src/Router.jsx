import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Form from "./pages/form";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "create",
      element: <Form />,
    },
  ]);