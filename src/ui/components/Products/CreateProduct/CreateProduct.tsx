import { AppButton } from "@components/AppButton/AppButton";
import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import {
  SignInContainer,
  SignInGrid,
} from "@components/Users/SignIn/SignIn.style";
import { TextField } from "@mui/material";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { createProduct } from "services/Products";

const CreateProduct: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [material, setMaterial] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [expiryDateAfterOpening, setExpiryDateAfterOpening] = useState("");

  const disabled =
    material.length < 4 ||
    description.length < 4 ||
    quantity.length < 1 ||
    expirationDate.length < 10 ||
    expiryDateAfterOpening.length < 1;

  const handleCreateProduct = async () => {
    const token = Cookies.get("token") as string;
    setLoading(true);
    await createProduct({
      description,
      expiration_date: expirationDate,
      expiry_date_after_opening: Number(expiryDateAfterOpening),
      material,
      quantity: Number(quantity),
      token,
    });

    setLoading(false);
  };

  return (
    <SignInContainer container>
      <img src="/assets/product.jpg" alt="" />
      <SignInGrid item md={6}>
        <PageTitle title={"Cadastrar Produto"} />
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
          type={"text"}
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
          disabled={disabled}
          loading={loading}
          onClick={handleCreateProduct}
          text={"Cadastrar"}
        />
      </SignInGrid>
    </SignInContainer>
  );
};

export { CreateProduct };
