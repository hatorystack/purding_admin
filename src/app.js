import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoutes";
import { History } from "./helpers";
import indexRoutes from "./routes/";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            {indexRoutes.map((prop, key) => {
              return (
                <PrivateRoute
                  path={prop.path}
                  key={key}
                  component={prop.component}
                />
              );
            })}
            {/* <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            /> */}
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
