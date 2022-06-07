import { IAppContext, IAppProvider } from "data/types/IApp";
import { createContext, useState } from "react";

const AppContext = createContext({} as IAppContext);

const AppProvider = ({ children }: IAppProvider) => {
  const [dark, setDark] = useState(false);
  const [adminActive, setAdminActive] = useState(false);

  const toggleAdminActive = (admin: boolean) => {
    setAdminActive(admin);
  };

  const handleSetDark = () => {
    setDark(!dark);
  };

  const formatDate = (date: string) => {
    const formatDate = new Date(date).toLocaleDateString("pt-br");

    return formatDate;
  };

  return (
    <AppContext.Provider
      value={{
        dark,
        handleSetDark,
        formatDate,
        adminActive,
        toggleAdminActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
