import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { ExpirationDate } from "@components/Products/ExpirationDate/ExpirationDate";
import { IExpirationDate } from "data/types/IApp";

import { GetServerSideProps } from "next";
import { productExpirationDate } from "services/Products";

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
  const idProduct = ctx.query.id as string;
  let id = null;
  let description = null;
  let expiration_date = null;
  let expiry_date_after_opening = null;
  let material = null;

  try {
    const response = (await productExpirationDate(
      idProduct
    )) as IExpirationDate;
    id = response.id;
    description = response.description;
    expiration_date = response.expiration_date;
    expiry_date_after_opening = response.expiry_date_after_opening;
    material = response.material;
  } catch (error) {}
  return {
    props: {
      id,
      material,
      description,
      expiration_date,
      expiry_date_after_opening,
    },
  };
};

export default expiration_date;
