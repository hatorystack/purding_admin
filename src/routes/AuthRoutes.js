import { lazy } from "react";
const Login = lazy(() => import("../views/pages/login/Login"));

const authRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

export default authRoutes;
