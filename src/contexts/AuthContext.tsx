import { useRouter } from "next/router";
import { setCookie } from "nookies";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { apiApp } from "services/api";
import Swal from "sweetalert2";
import { AppContext } from "./AppContext";

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
  const { adminActive, toggleAdminActive } = useContext(AppContext);

  const router = useRouter();
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const disabled = name.length < 3 || password.length < 4 || loading;

  const isAuthenticated = false;

  const handleSignIn = async () => {
    setLoading(true);
    const { data } = await apiApp.post("/login", { name, password });
    if (data.message === "User/Password incorrect!") {
      Swal.fire({
        icon: "warning",
        title: "Usuário ou senha incorretos!",
        text: "Tente novamente ",
      });
    }
    if (data.token) {
      setCookie(undefined, "token", data.token, {
        maxAge: 60 * 60 * 9, // 9 hour
      });

      toggleAdminActive(data.admin);

      router.push("/users/home");
    }

    setName("");
    setPassword("");
    setLoading(false);
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
