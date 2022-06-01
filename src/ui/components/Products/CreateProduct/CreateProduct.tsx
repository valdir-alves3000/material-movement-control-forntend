import { AppButton } from "@components/AppButton/AppButton";
import {
  SignInContainer,
  SignInGrid,
} from "@components/Users/SignIn/SignIn.style";
import { TextField } from "@mui/material";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { createProduct } from "services/Products";
import Swal from "sweetalert2";

const CreateProduct: React.FC = () => {
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [expiryDateAfterOpening, setExpiryDateAfterOpening] = useState("");

  const handleCreateProduct = async () => {
    const token = Cookies.get("token") as string;

    try {
      const product = await createProduct({
        description,
        expiration_date: expirationDate,
        expiry_date_after_opening: Number(expiryDateAfterOpening),
        material,
        quantity: Number(quantity),
        token,
      });

      alert(product);

      Swal.fire({
        icon: "success",
        title: "Produto cadastrado",
        titleText: "Produto cadastrado com sucesso",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Falha no cadatro",
        titleText: "Produto não cadastrado",
      });
    }
  };

  return (
    <SignInContainer container>
      <img src="/assets/list.png" alt="" />
      <SignInGrid item md={6}>
        <TextField
          fullWidth
          label={"Produto"}
          required
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />

        <TextField
          fullWidth
          label={"Descrição"}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          fullWidth
          label={"Quantidade"}
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <TextField
          fullWidth
          placeholder="01/01/1960"
          label={"Data de Validade"}
          required
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <TextField
          fullWidth
          label={"Validade após aberto"}
          required
          value={expiryDateAfterOpening}
          onChange={(e) => setExpiryDateAfterOpening(e.target.value)}
        />

        <AppButton
          disabled={false}
          loading={false}
          onClick={handleCreateProduct}
          text={"Cadastar"}
        />
      </SignInGrid>
    </SignInContainer>
  );
};

export { CreateProduct };
