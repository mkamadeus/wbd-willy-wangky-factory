import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
