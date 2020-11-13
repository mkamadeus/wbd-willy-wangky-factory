import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage} />
    </BrowserRouter>
  );
};

export default App;
