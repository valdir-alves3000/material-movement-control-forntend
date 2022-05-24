/* eslint-disable @next/next/no-img-element */
import { Layout } from "@components/Layout";
import { Typography } from "@mui/material";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { QRBox, QRContainer } from "./QRCodeGenerate.style";

interface IQRCodeGenerate {
  id: string;
}
const QRCodeGenerate = ({ id }: IQRCodeGenerate) => {
  const [srcId, setSrcId] = useState("");
  const [srcUrl, setSrcUrl] = useState("");

  const url = `${process.env.NEXT_PUBLIC_URL_APP}/products/expiration_date/${id}`;

  useEffect(() => {
    QRCode.toDataURL(id).then((data) => {
      setSrcId(data);
    });
    QRCode.toDataURL(url).then((data) => {
      setSrcUrl(data);
    });
  }, [id]);

  return (
    <Layout>
      <QRContainer>
        <QRBox>
          <Typography>ID do Produto: </Typography>
          <Typography>{id}</Typography>
          <img src={srcId} alt="QRCode do ID do produto " />
        </QRBox>
        <QRBox>
          <Typography>Verificar validade: </Typography>
          <Typography>{url}</Typography>
          <img src={srcUrl} alt="QRCode da URL do produto" />
        </QRBox>
      </QRContainer>
    </Layout>
  );
};

export { QRCodeGenerate };
