import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApiContextProvider from "./context/ApiContext";
import UserContextProvider from "./context/UserContext";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <ApiContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </ApiContextProvider>
    </UserContextProvider>
  );
};

export default App;
