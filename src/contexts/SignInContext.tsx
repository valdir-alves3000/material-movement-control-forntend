import { AppContext } from "contexts/AppContext";
import api from "data/services/api";
import { checkAdmin } from "data/services/Users";
import { IAppProvider, ISignInContext } from "data/types/IAppContext";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const SignInContext = createContext({} as ISignInContext);

const SignInProvider = ({ children }: IAppProvider) => {
  const router = useRouter();
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const { updateToken, toggleAdminActive } = useContext(AppContext);

  const disabled = name.length < 3 || password.length < 4 || loading;

  async function handleSignIn() {
    setLoading(true);
    try {
      const { data } = await api.post("/login", { name, password });
      updateToken(data);

      const adminActive = await checkAdmin(data);

      toggleAdminActive(adminActive);

      router.push("/users/home");
      return;
    } catch (err) {
      console.log(err);
      return Swal.fire({
        icon: "warning",
        title: "Usuário ou senha incorreto",
        text: "Tente novamente!",
      });
    } finally {
      setLoading(false);
      setName("");
      setPassword("");
    }
  }

  return (
    <SignInContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        handleSignIn,
        loading,
        disabled,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
};

export { SignInContext, SignInProvider };
