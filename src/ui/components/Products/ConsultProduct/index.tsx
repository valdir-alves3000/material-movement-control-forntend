import { AppButton } from "@components/AppButton/AppButton";
import { Layout } from "@components/Layout";
import { StoreProdutStyled } from "@components/Products/StoreProdut/StoreProdut.style";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

const ConsultProduct = () => {
  const loading = true;
  const router = useRouter();

  const disabled = true;
  const [id, setId] = useState("");
  const [position, setPosition] = useState("");

  const confirm_position = () => {
    Swal.fire({
      icon: "success",
      title: "Produto no estoque",
      text: "Material posicionado com sucesso!",
    });

    router.back();
  };
  return (
    <Layout>
      <StoreProdutStyled>
        <img src="/assets/forklift.png" alt="" />
        <Box>
          <TextField
            label="ID do Produto"
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <AppButton
            disabled={disabled}
            loading={loading}
            text="Consultar"
            onClick={confirm_position}
          />
        </Box>
      </StoreProdutStyled>
    </Layout>
  );
};

export { ConsultProduct };
