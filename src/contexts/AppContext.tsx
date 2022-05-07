import { IAppContext, IAppProvider } from "data/types/IAppContext";
import { createContext, useState } from "react";

const AppContext = createContext({} as IAppContext);

const AppProvider = ({ children }: IAppProvider) => {
  const [dark, setDark] = useState(false);
  const [token, setToken] = useState("");
  const [adminActive, setAdminActive] = useState(false);

  const handleSetDark = () => {
    setDark(!dark);
  };

  const updateToken = (update_token: string) => {
    setToken(update_token);
  };

  const toggleAdminActive = (admin: boolean) => {
    setAdminActive(admin);
  };

  return (
    <AppContext.Provider
      value={{
        dark,
        token,
        adminActive,
        updateToken,
        handleSetDark,
        toggleAdminActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
