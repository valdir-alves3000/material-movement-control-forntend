import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import {
  ProductCard,
  ProductContainer,
} from "@styles/Product/ExpirationDate.style";

import { GetServerSideProps } from "next";
import { productExpirationDate } from "services/Products";

interface IExpiration_date {
  id: string | null;
  description: string | null;
  material: string | null;
  expiration_date: string | null;
  expiry_date_after_opening: string | null;
}

const Expiration_date = ({
  id,
  material,
  description,
  expiration_date,
  expiry_date_after_opening,
}: IExpiration_date) => {
  if (!id) {
    return <ErrorPage />;
  }

  return (
    <ProductContainer>
      <ProductCard>
        <p>Produto</p>
        <span> {material} </span>

        <p>description</p>
        <span> {description} </span>

        <p>Data de validade</p>
        <span> {expiration_date} </span>
        <p>Consumir em</p>
        <span>{` ${expiry_date_after_opening} dias`}</span>
      </ProductCard>
    </ProductContainer>
  );
};

export default Expiration_date;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const idProduct = ctx.query.id as string;

  try {
    const {
      id,
      description,
      expiration_date,
      expiry_date_after_opening,
      material,
    }: IExpiration_date = (await productExpirationDate(
      idProduct
    )) as IExpiration_date;

    return {
      props: {
        id,
        material,
        description,
        expiration_date,
        expiry_date_after_opening,
      },
    };
  } catch (error) {
    return {
      props: {
        id: null,
        material: null,
        description: null,
        expiration_date: null,
        expiry_date_after_opening: null,
      },
    };
  }
};
