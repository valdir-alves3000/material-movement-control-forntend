import { ListAllProduct } from "@components/Products/ListAllProduct";
import { GetServerSideProps } from "next";
import { getProducts } from "services/Products";

const list_all_product = ({ products }: any) => {
  return <ListAllProduct products={products} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.query.token as string;
  const products = await getProducts(token);

  return {
    props: {
      products,
    },
  };
};

export default list_all_product;
