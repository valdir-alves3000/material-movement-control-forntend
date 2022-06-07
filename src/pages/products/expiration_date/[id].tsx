import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { ExpirationDate } from "@components/Products/ExpirationDate/ExpirationDate";
import { prisma } from "@lib/prisma";
import { IExpirationDate } from "data/types/IApp";

import { GetServerSideProps } from "next";

const expiration_date = ({
  id,
  material,
  description,
  expiration_date,
  expiry_date_after_opening,
}: IExpirationDate) => {
  if (!id) {
    return <ErrorPage />;
  }

  return (
    <ExpirationDate
      id={id}
      description={description}
      material={material}
      expiration_date={expiration_date}
      expiry_date_after_opening={expiry_date_after_opening}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id as string;

  try {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    return {
      props: {
        id,
        material: product?.material,
        description: product?.description,
        expiration_date: product?.expiration_date.toISOString(),
        expiry_date_after_opening: product?.expiry_date_after_opening,
      },
    };
  } catch (error) {
    return {
      props: {
        id: null,
      },
    };
  }
};

export default expiration_date;
