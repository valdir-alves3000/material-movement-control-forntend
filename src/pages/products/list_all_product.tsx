import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import { ListAllProduct } from "@components/Products/ListAllProduct/ListAllProduct";
import { prisma } from "@lib/prisma";
import { IProductListResponse } from "data/types/IApp";
import { GetServerSideProps } from "next";

const list_all_product = ({ products }: IProductListResponse) => {
  if (!products) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <ListAllProduct products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products = await prisma.products.findMany({});

  const data = products.map((product) => {
    return {
      id: product.id,
      storage_location: product.storage_location,
      status: product.status,
      material: product.material,
      description: product.description,
      quantity: product.quantity,
      locked: product.locked,
      expiration_date: product.expiration_date.toISOString(),
      expiry_date_after_opening: product.expiry_date_after_opening,
      created_by_user: product.created_by_user,
      updated_by_user: product.updated_by_user,
      created_at: product.created_at.toISOString(),
      updated_at: product.updated_at.toISOString(),
    };
  });

  return {
    props: {
      products: data,
    },
  };
};

export default list_all_product;
