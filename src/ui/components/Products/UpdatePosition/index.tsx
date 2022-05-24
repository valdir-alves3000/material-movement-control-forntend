import { ButtonApp } from "@components/ButtonApp";
import { Layout } from "@components/Layout";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { StoreProdutStyled } from "../StoreProdut/StoreProdut.style";

const UpdatePosition = () => {
  const router = useRouter();

  const confirm_position = () => {
    Swal.fire({
      icon: "success",
      title: "Posição alterada",
      text: "Posição atualizada com sucesso!",
    });

    router.back();
  };
  return (
    <Layout>
      <StoreProdutStyled>
        <img src="/assets/forklift.png" alt="" />
        <Box>
          <TextField label="ID do Produto" fullWidth />
          <TextField
            label="Localização de origem"
            fullWidth
            style={{ marginLeft: "5px" }}
          />
          <TextField
            label="Localização de destino"
            fullWidth
            style={{ marginLeft: "5px" }}
          />
          <ButtonApp text="Atualizar" onClick={confirm_position} />
        </Box>
      </StoreProdutStyled>
    </Layout>
  );
};

export { UpdatePosition };
