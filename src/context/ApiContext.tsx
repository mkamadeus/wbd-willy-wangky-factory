import React, { useMemo, useState } from "react";

export type ApiContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

export const ApiContext = React.createContext<ApiContextType>({
  token: "",
  setToken: () => {},
});

const ApiContextProvider: React.FC = (props) => {
  const localToken = useMemo(() => {
    const token = localStorage.getItem("token");
    return token ? token : "";
  }, []);

  const [token, setToken] = useState<string>(localToken);

  return (
    <ApiContext.Provider value={{ token, setToken }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
