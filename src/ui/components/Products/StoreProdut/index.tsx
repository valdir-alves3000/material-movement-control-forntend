import { ButtonApp } from "@components/ButtonApp";
import { Layout } from "@components/Layout";
import { Box, TextField } from "@mui/material";
import { AppContext } from "contexts/AppContext";
import { StorageProductContext } from "contexts/StorageProductContext";
import { useContext } from "react";
import { StoreProdutStyled } from "./StoreProdut.style";

const StoreProdut = () => {
  const { token } = useContext(AppContext);
  const {
    loading,
    disabled,
    storageLocation,
    setStorageLocation,
    idProduct,
    setIdProduct,
    confirmPosition,
  } = useContext(StorageProductContext);

  return (
    <Layout>
      <StoreProdutStyled>
        <img src="/assets/forklift.png" alt="" />
        <Box>
          <TextField
            label="ID do Produto"
            fullWidth
            value={idProduct}
            onChange={(e) => setIdProduct(e.target.value)}
          />
          <TextField
            label="Localização de destino"
            fullWidth
            value={storageLocation}
            onChange={(e) => setStorageLocation(e.target.value)}
          />
          <ButtonApp
            disabled={disabled}
            loading={loading}
            text="Armazernar"
            onClick={confirmPosition}
          />
        </Box>
      </StoreProdutStyled>
    </Layout>
  );
};

export { StoreProdut };
