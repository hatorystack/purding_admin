import React, { lazy } from "react";

const Login = React.lazy(() => import("../views/pages/login/Login"));
const TheLayout = React.lazy(() => import("../containers/TheLayout"));

const indexRoutes = [
  { path: "/login", name: "Auth", component: Login },
  { path: "/", name: "Dashboard", component: TheLayout },
];

export default indexRoutes;
