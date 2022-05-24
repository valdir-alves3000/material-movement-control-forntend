import { ICreateUserContext, ICreateUserProvider } from "data/types/IApp";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { createUser } from "services/Users";
import Swal from "sweetalert2";
import { AppContext } from "./AppContext";

const CreateUserContext = createContext({} as ICreateUserContext);

const CreateUserProvider = ({ children }: ICreateUserProvider) => {
  const router = useRouter();
  const { token } = useContext(AppContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const disabled = name.length < 4 || password.length < 5 || loading;

  const handleCreateUser = async () => {
    setLoading(true);

    const user = await createUser({ name, password, admin, token });
    if (user === "error") {
      Swal.fire({
        icon: "error",
        title: "Erro no cadastro!",
        text: "Tente novamente!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Usuário cadastrado",
        text: "Usuário já pode acessar o sistema",
      });

      router.back();
    }

    setLoading(false);
    setName("");
    setPassword("");
  };

  const toggleAdmin = () => {
    setAdmin(!admin);
  };

  return (
    <CreateUserContext.Provider
      value={{
        admin,
        disabled,
        handleCreateUser,
        loading,
        name,
        password,
        setName,
        setPassword,
        toggleAdmin,
      }}
    >
      {children}
    </CreateUserContext.Provider>
  );
};

export { CreateUserContext, CreateUserProvider };
