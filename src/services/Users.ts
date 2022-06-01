import { IUserService } from "data/types/IApp";
import { apiApp } from "services/api";
import Swal from "sweetalert2";

const getUsers = async (token: string) => {
  try {
    const { data } = await apiApp.get("/users", {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};

const checkAdmin = async (token: string) => {
  const { data } = await apiApp.get("/admin", {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  const admin = data.admin as boolean;

  return admin;
};

const createUser = async ({ token, name, password, admin }: IUserService) => {
  const data = {
    name,
    password,
    token,
    admin: Boolean(admin),
  };

  try {
    const response = await apiApp.post("/users", data, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (token: string, id: string) => {
  Swal.fire({
    title: "Tem certeza?",
    text: "Após excluir, o usuário não terá acesso ao sistema.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Excluir",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await apiApp.delete(`/users/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });

      Swal.fire("Deletado!", "Usuário excluído com sucesso.", "success");
    }
  });
};

export { getUsers, checkAdmin, createUser, deleteUser };
