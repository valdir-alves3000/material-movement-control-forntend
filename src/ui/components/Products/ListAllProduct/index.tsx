import { PageTitle } from "@components/data-display/PageTitle/PageTitle";
import { Layout } from "@components/Layout";
import { Typography } from "@mui/material";
import { IProductListResponse } from "data/types/IApp";
import {
  ListProductBox,
  ListProductContainer,
  ListProductGrid,
} from "./ListProduct.style";

const ListAllProduct = ({ products }: IProductListResponse) => {
  return (
    <Layout>
      <ListProductContainer container spacing={3}>
        {products.map((product) => (
          <ListProductGrid item sm={6} xs={12} key={product.id}>
            <ListProductBox>
              <PageTitle title="Informações do Produto" />
              <Typography>
                ID:<span>a2206a86-2571-4be8-927a-86b7610a614b</span>
              </Typography>
              <Typography>
                material: <span>Farinha de trigo</span>
              </Typography>
              <Typography>
                localização: <span> 10.01.05</span>
              </Typography>
              <Typography>
                status: <span> receiver </span>
              </Typography>
              <Typography>
                description: <span> Massas para pães bolos </span>
              </Typography>
              <Typography>
                quantity: <span>172 Kg</span>
              </Typography>
              <Typography>
                data de validade: <span>21/05/23 </span>
              </Typography>
              <Typography>
                validade pós aberto:
                <span> 20 dias </span>
              </Typography>
            </ListProductBox>
          </ListProductGrid>
        ))}
      </ListProductContainer>
    </Layout>
  );
};

export { ListAllProduct };
