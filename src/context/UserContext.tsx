import { stringify } from "querystring";
import React, { useState } from "react";

export type UserContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = React.createContext<UserContextType>({
  username: "",
  setUsername: () => {},
  isLoggedIn: false,
  setLoggedIn: () => {},
});

const UserContextProvider: React.FC = (props) => {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{ username, setUsername, isLoggedIn, setLoggedIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
