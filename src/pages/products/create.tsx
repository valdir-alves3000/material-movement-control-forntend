import { Layout } from "@components/Layout";
import { CreateProduct } from "@components/Products/CreateProduct/CreateProduct";
import { CreateProductProvider } from "contexts/CreateProductContext";

const products = () => {
  return (
    <Layout>
      <CreateProductProvider>
        <CreateProduct />
      </CreateProductProvider>
    </Layout>
  );
};

export default products;
