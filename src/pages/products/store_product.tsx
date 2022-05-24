import { StoreProdut } from "@components/Products/StoreProdut";
import { StorageProductProvider } from "contexts/StorageProductContext";

const store_product = () => {
  return (
    <StorageProductProvider>
      <StoreProdut />
    </StorageProductProvider>
  );
};

export default store_product;
