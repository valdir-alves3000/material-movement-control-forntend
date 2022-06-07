import { AppButton } from "@components/AppButton/AppButton";
import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { IExpirationDate } from "data/types/IApp";
import { useState } from "react";
import { apiTwilio } from "services/api";
import {
  ExpirationDateBox,
  ExpirationDateContainer,
  ExpirationDateGrid,
} from "./ExpirationDate.style";

const ExpirationDate = ({
  description,
  expiration_date,
  expiry_date_after_opening,
  id,
  material,
}: IExpirationDate) => {
  const [openProduct, setOpenProduct] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  const [loading, setLoading] = useState(false);
  const disabled = whatsapp.length < 11;

  const handleCreateMessage = async () => {
    const data = {
      phone: Number(whatsapp),
      expirationDate: expiration_date,
      expirationDateIsOpen: expiry_date_after_opening,
      openProduct,
      product: material,
    };

    await createMessageTwilio(data);

    setTimeout(async () => {
      await alertToExpiration(data.phone, data.product!);
    }, 7000);
  };

  const createMessageTwilio = async (data: any) => {
    setLoading(true);

    try {
      await apiTwilio.post("/twilio/create_message", data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const alertToExpiration = async (phone: number, product: string) => {
    await apiTwilio.post("/twilio/create_message", {
      closeToExpiration: true,
      phone,
      product,
    });
  };

  return (
    <>
      <ExpirationDateContainer container>
        <ExpirationDateGrid item md={12}>
          <ExpirationDateBox>
            <PageTitle title="Informações do Produto" />

            <Typography>
              Produto: <span> {material} </span>
            </Typography>

            <Typography>
              Data de validade:{" "}
              <span>
                {" "}
                {new Date(expiration_date!).toLocaleDateString("pt-br")}{" "}
              </span>
            </Typography>
            <Typography>
              Após aberto consumir em:
              <span> {expiry_date_after_opening + " dias"} </span>
            </Typography>
            <Typography>
              Descrição: <span> {description} </span>
            </Typography>
          </ExpirationDateBox>
        </ExpirationDateGrid>

        <h3>
          Para receber informações do produto via Whatsapp envie a seguinte
          mensagem
        </h3>
        <Typography color={"rebeccapurple"}>*join film-pine*</Typography>
        <h3> Para o numero: +1(415)523-8886. </h3>
        <Typography>
          Se o WhatsApp estiver instalado neste dispositivo, você pode{" "}
          <a
            href={"http://wa.me/+14155238886?text=join%20film-pine"}
            target={"_blank"}
            rel="noreferrer"
          >
            clicar aqui
          </a>
          .
        </Typography>
        <Typography>Após o envio da mensagem.</Typography>

        <Typography>
          Preencha os campos com seu número e clique no botão.
        </Typography>

        <FormControlLabel
          style={{ paddingTop: "10px" }}
          label="Produto Aberto"
          control={
            <Checkbox
              value={openProduct}
              onChange={() => setOpenProduct(!openProduct)}
            />
          }
        />

        <TextField
          style={{ paddingBottom: "10px" }}
          label="WhatsApp"
          required
          placeholder="11999999999"
          type={"password"}
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <AppButton
          disabled={disabled}
          loading={loading}
          onClick={handleCreateMessage}
          text={"Receber Informações"}
        />
      </ExpirationDateContainer>
    </>
  );
};

export { ExpirationDate };
