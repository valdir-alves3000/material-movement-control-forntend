import Router from "next/router";
import { setCookie } from "nookies";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { apiApp } from "services/api";
import { checkAdmin } from "services/Users";
import Swal from "sweetalert2";

interface SignInRequest {
  name: string;
  password: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  disabled: boolean;
  loading: boolean;
  name: string;
  password: string;

  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  handleSignIn: () => Promise<void>;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const disabled = name.length < 3 || password.length < 4 || loading;

  const isAuthenticated = false;

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const { data } = await apiApp.post("/login", { name, password });
      const admin = await checkAdmin(data);

      setCookie(undefined, "token", data, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setCookie(undefined, "adminActive", String(admin), {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      Router.push("/users/home");
    } catch (err) {
      Swal.fire({
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
    <AuthContext.Provider
      value={{
        isAuthenticated,
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
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
