import { IAppContext, IAppProvider } from "data/types/IApp";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext({} as IAppContext);

const AppProvider = ({ children }: IAppProvider) => {
  const [dark, setDark] = useState(false);
  const [adminActive, setAdminActive] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") ?? "");

  const handleSetDark = () => {
    setDark(!dark);
  };

  const toggleAdminActive = (admin: boolean) => {
    setAdminActive(admin);
  };

  const toggleToken = async (newToken: string) => {
    setToken(newToken);
  };

  const formatDate = (date: string) => {
    const formatDate = new Date(date).toLocaleDateString("pt-br");

    return formatDate;
  };

  useEffect(() => {}, [token]);

  return (
    <AppContext.Provider
      value={{
        dark,
        adminActive,
        handleSetDark,
        toggleAdminActive,
        toggleToken,
        token,
        formatDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
