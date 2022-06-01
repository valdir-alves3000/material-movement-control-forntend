import {
  AppTable,
  AppTableBodyTr,
  AppTableTd,
  AppTableTh,
} from "@styles/Table.style";
import { AppContext } from "contexts/AppContext";
import { IProductListResponse } from "data/types/IApp";
import { useContext } from "react";
import { ListAllProductContainer } from "./ListProduct.style";

const ListAllProduct = ({ products }: IProductListResponse) => {
  const { formatDate } = useContext(AppContext);
  const validate = (date: string) => {
    const now = Date.now();
    const newDate = new Date(date);

    const validate = newDate.getTime() - now;

    if (validate < 0) {
      return "vencido";
    }

    const daysToExpiration = Math.floor(validate / (24 * 60 * 60 * 1000));

    return daysToExpiration;
  };

  const customColor = (date: string) => {
    if (validate(date) < 180) {
      return "#fcaf4a";
    }

    if (validate(date) < 30 || validate(date) === "vencido") {
      return "#ea5353";
    }
  };

  return (
    <ListAllProductContainer>
      <AppTable>
        <thead>
          <tr>
            <AppTableTh>Produto</AppTableTh>
            <AppTableTh>vencimento em:</AppTableTh>
            <AppTableTh>Data de validade</AppTableTh>
            <AppTableTh>Localização</AppTableTh>
            <AppTableTh>Quantidade</AppTableTh>
            <AppTableTh>Bloqueado</AppTableTh>
            <AppTableTh>Atualizado</AppTableTh>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <AppTableBodyTr
              key={product.id}
              style={{
                color: `${customColor(product.expiration_date)}`,
              }}
            >
              <AppTableTd>{product.material}</AppTableTd>
              <AppTableTd>
                {validate(product.expiration_date) === "vencido"
                  ? validate(product.expiration_date)
                  : validate(product.expiration_date) + " dias"}
              </AppTableTd>
              <AppTableTd>{formatDate(product.expiration_date)}</AppTableTd>
              <AppTableTd>{product.storage_location}</AppTableTd>
              <AppTableTd>{product.quantity}</AppTableTd>
              <AppTableTd>{String(product.locked)}</AppTableTd>
              <AppTableTd>{formatDate(product.updated_at)}</AppTableTd>
            </AppTableBodyTr>
          ))}
        </tbody>
      </AppTable>
    </ListAllProductContainer>
  );
};

export { ListAllProduct };
