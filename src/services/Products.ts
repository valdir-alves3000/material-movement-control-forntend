import api from "./api";

interface IProductService {
  token: string;
  idProduct: string;
  storageLocation?: string;
}

const getProducts = async (token: string) => {
  const { data } = await api.get(`/products?id`, {
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
  const data = {};
  try {
    const response = await api.put(`/products/${idProduct}`, storageLocation, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    alert(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const productExpirationDate = async (idProduct: string) => {
  try {
    const { data } = await api.get(`products/expiration_date/${idProduct}`);

    return data;
  } catch (error) {}
};

export { getProducts, updateProduct, productExpirationDate };
