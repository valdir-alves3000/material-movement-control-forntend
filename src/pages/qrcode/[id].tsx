import { QRCodeGenerate } from "@components/QRCodeGenerate/QRCodeGenerate";
import { GetServerSideProps } from "next";

interface IQRCode {
  id: string;
}

const qrcode = ({ id }: IQRCode) => {
  return <QRCodeGenerate id={id} />;
};

export default qrcode;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id as string;

  return {
    props: {
      id,
    },
  };
};
