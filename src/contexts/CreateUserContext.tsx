import { ICreateUserContext, ICreateUserProvider } from "data/types/IApp";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { apiApp } from "services/api";
import Swal from "sweetalert2";

const CreateUserContext = createContext({} as ICreateUserContext);

const CreateUserProvider = ({ children }: ICreateUserProvider) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const disabled = name.length < 4 || password.length < 5;

  const handleCreateUser = async () => {
    setLoading(true);

    try {
      const { data } = await apiApp.post("/users/create", {
        name,
        password,
        admin,
      });

      if (data === "User already exists!") {
        return Swal.fire({
          icon: "error",
          title: "Usuário já cadastrado",
          text: "Tente o cadastro com outro nome",
        });
      }

      Swal.fire({
        icon: "success",
        title: "Usuário cadastro com sucesso",
        text: "Usuário está liberado para acessar o sistema",
      });

      router.back();
    } catch (error) {
    } finally {
      setLoading(false);
      setName("");
      setPassword("");
    }
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
