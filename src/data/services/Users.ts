import { IUser } from "data/types/IAppContext";
import api from "./api";

const getUsers = async (token: string) => {
  const { data } = await api.get("/users", {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  return data;
};

const checkAdmin = async (token: string) => {
  const { data } = await api.get("/admin", {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  const admin = data.admin as boolean;

  return admin;
};

const createUser = async ({ token, name, password, admin }: IUser) => {
  const data = {
    name,
    password,
    token,
    admin,
  };

  try {
    const response = await api.post("/users", data, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    return "User already exists!";
  }
};

export { getUsers, checkAdmin, createUser };
