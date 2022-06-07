/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
const NEXT_PUBLIC_TWILIO_ID = process.env.NEXT_PUBLIC_TWILIO_ID;
const NEXT_PUBLIC_TWILIO_AUTHTOKEN = process.env.NEXT_PUBLIC_TWILIO_AUTHTOKEN;

const client = require("twilio")(
  NEXT_PUBLIC_TWILIO_ID,
  NEXT_PUBLIC_TWILIO_AUTHTOKEN
);

interface ICreateMessage {
  expirationDate: string;
  expirationDateIsOpen: string;
  openProduct: boolean;
  closeToExpiration: boolean;
  phone: string;
  product: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    expirationDate,
    expirationDateIsOpen,
    openProduct,
    phone,
    closeToExpiration,
    product,
  }: ICreateMessage = req.body;

  if (req.method === "POST") {
    const shootMessage = (textBody: string) => {
      if (phone) {
        client.messages
          .create({
            body: textBody,
            from: "whatsapp:+14155238886",
            to: `whatsapp:+55${phone}`,
          })
          .then()
          .done();
      }
    };

    let message = "";
    const now = new Date(Date.now()).toLocaleDateString("pt-br");
    const formatExpirationDate = new Date(expirationDate).toLocaleDateString(
      "pt-br"
    );

    if (openProduct) {
      message = `*Informações do Produto*: ${product} \n\n Aberto em *${now}*\n\n Vence em ${expirationDateIsOpen} dias`;
    } else {
      message = `*Guardiões da Saúde em acão*\n\nInformações do Produto: ${product} \n\n Vencimento em ${formatExpirationDate}`;
    }

    if (closeToExpiration) {
      message = `*Guardiões da Saúde em acão*\n\n Informações do Produto: ${product} \n\n *Fique de Olho* \n\n Seu produto vence em 5 dias`;
    }

    shootMessage(message);

    return res.json({ message });
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
