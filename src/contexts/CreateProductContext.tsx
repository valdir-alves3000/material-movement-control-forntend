import { ICreateProductContext, ICreateProductProvider } from "data/types/IApp";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { apiApp } from "services/api";
import Swal from "sweetalert2";

const CreateProductContext = createContext({} as ICreateProductContext);

const CreateProductProvider = ({ children }: ICreateProductProvider) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiration_date, setExpirationDate] = useState("");
  const [expiry_date_after_opening, setExpiryDateAfterOpening] = useState("");

  const disabled =
    material.length < 4 ||
    description.length < 4 ||
    quantity.length < 1 ||
    expiration_date.length < 10 ||
    expiry_date_after_opening.length < 1;

  const handleCreateProduct = async () => {
    const dataRequest = {
      material,
      description,
      expiration_date: new Date(expiration_date),
      expiry_date_after_opening,
      quantity,
      created_by_user: "9fe5caf1-8dfb-4b41-86bf-63a9b976b0ad",
    };

    setLoading(true);

    try {
      const { data } = await apiApp.post("/products/create", dataRequest);

      Swal.fire({
        icon: "success",
        title: "Produto cadastro com sucesso",
        text: "O produto já pode ser localizado no banco de dados",
      });

      const id = JSON.parse(JSON.stringify(data.id));

      router.push(`/qrcode/${id}`);
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "Produto não cadastrado",
        text: "Falha no cadastro, confira os dados e tente novamente",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CreateProductContext.Provider
      value={{
        description,
        disabled,
        expiration_date,
        expiry_date_after_opening,
        loading,
        material,
        quantity,
        setDescription,
        setExpirationDate,
        setExpiryDateAfterOpening,
        setMaterial,
        setQuantity,
        handleCreateProduct,
      }}
    >
      {children}
    </CreateProductContext.Provider>
  );
};

export { CreateProductContext, CreateProductProvider };
