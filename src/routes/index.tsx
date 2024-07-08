import { RouteObject } from "react-router-dom";

import App from "../App";
import LoginPage from "../pages/LoginPage";

const routesConfig: RouteObject[] = [
  {
    path: "admin/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <App />,
  },
];

export default routesConfig;
