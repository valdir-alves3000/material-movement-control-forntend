import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import { ListAllProduct } from "@components/Products/ListAllProduct/ListAllProduct";
import { StorageProductProvider } from "contexts/StorageProductContext";
import { IProductListResponse } from "data/types/IApp";
import { GetServerSideProps } from "next";
import { getProducts } from "services/Products";

const list_all_product = ({ products }: IProductListResponse) => {
  if (!products) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <StorageProductProvider>
        <ListAllProduct products={products} />
      </StorageProductProvider>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.token as string;
  let products = [];

  try {
    products = await getProducts(token);
  } catch (error) {}

  return {
    props: {
      products,
    },
  };
};

export default list_all_product;
