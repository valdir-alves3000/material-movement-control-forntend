import { AppButton } from "@components/AppButton/AppButton";
import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import {
  SignInContainer,
  SignInGrid,
} from "@components/Users/SignIn/SignIn.style";
import { TextField } from "@mui/material";
import { CreateProductContext } from "contexts/CreateProductContext";
import { useContext } from "react";

const CreateProduct = () => {
  const {
    material,
    setMaterial,
    description,
    setDescription,
    quantity,
    setQuantity,
    expiration_date,
    expiry_date_after_opening,
    setExpirationDate,
    setExpiryDateAfterOpening,
    loading,
    disabled,
    handleCreateProduct,
  } = useContext(CreateProductContext);

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
          placeholder="AAAA/MM/DD"
          label={"Data de Validade"}
          required
          value={expiration_date}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <TextField
          fullWidth
          label={"Validade após aberto"}
          required
          value={expiry_date_after_opening}
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
