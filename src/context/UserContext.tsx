import React, { useState } from "react";

export interface UserContextType {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = React.createContext<UserContextType>(
  {} as UserContextType
);

interface Props {}

export const UserContextProvider: React.FC<Props> = (props) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};
