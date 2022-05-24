import { ISignInContext, ISignInProvider } from "data/types/IApp";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import api from "services/api";
import { checkAdmin } from "services/Users";
import Swal from "sweetalert2";
import { AppContext } from "./AppContext";

const SignInContext = createContext({} as ISignInContext);

const SignInProvider = ({ children, cookies }: ISignInProvider) => {
  const router = useRouter();
  const { toggleAdminActive, toggleToken, token } = useContext(AppContext);

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const disabled = name.length < 3 || password.length < 4 || loading;

  toggleToken(cookies.token);
  toggleAdminActive(Boolean(cookies.adminActive));

  const handleSignIn = async () => {
    setLoading(true);

    try {
      const { data } = await api.post("/login", { name, password });
      toggleToken(data);
      Cookies.set("token", data);

      const adminActive = await checkAdmin(data);
      adminActive
        ? Cookies.set("adminActive", String(adminActive))
        : Cookies.remove("adminActive");

      return router.push("/users/home");
    } catch (err) {
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
  };

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
