import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthRoutes from "../routes/AuthRoutes.js";

const TheBlankLayout = () => {
  return (
    <div className="authentications">
      <Switch>
        {AuthRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          return (
            <Route path={prop.path} component={prop.component} key={key} />;
          );
        })}
      </Switch>
    </div>
  );
};

export default TheBlankLayout;