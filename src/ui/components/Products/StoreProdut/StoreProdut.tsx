import { AppButton } from "@components/AppButton/AppButton";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { StoreProdutStyled } from "./StoreProdut.style";

const StoreProdut = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [storageLocation, setStorageLocation] = useState("");

  const [idProduct, setIdProduct] = useState("");
  const confirmPosition = () => {};

  return (
    <StoreProdutStyled>
      <>
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
          <AppButton
            loading={loading}
            disabled={disabled}
            text="Armazernar"
            onClick={() => {
              alert("VSALVES");
            }}
          />
        </Box>
      </>
    </StoreProdutStyled>
  );
};

export { StoreProdut };
