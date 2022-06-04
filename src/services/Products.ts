import { IProductRequest } from "data/types/IApp";
import Swal from "sweetalert2";
import { apiApp } from "./api";

interface IProductService {
  token: string;
  idProduct: string;
  storageLocation?: string;
}

const getProducts = async (token: string) => {
  const { data } = await apiApp.get(`/products?id`, {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  return data;
};

const updateProduct = async ({
  token,
  idProduct,
  storageLocation,
}: IProductService) => {
  try {
    const response = await apiApp.put(
      `/products/${idProduct}`,
      storageLocation,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const productExpirationDate = async (idProduct: string) => {
  try {
    const { data } = await apiApp.get(`products/expiration_date/${idProduct}`);

    return data;
  } catch (error) {}
};

const createProduct = async ({
  description,
  expiration_date,
  expiry_date_after_opening,
  material,
  quantity,
  token,
}: IProductRequest) => {
  const data = {
    description,
    expiration_date,
    expiry_date_after_opening,
    material,
    quantity,
  };

  try {
    const response = await apiApp.post("/products", data, {
      headers: {
        authorization: "Bearer " + token,
      },
    });

    alert(JSON.stringify(response.data));

    Swal.fire({
      icon: "success",
      title: "Produto cadastrado",
      titleText: "Produto cadastrado com sucesso",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Falha no cadatro",
      titleText: "Produto não cadastrado",
    });
  }
};

export { getProducts, updateProduct, productExpirationDate, createProduct };
