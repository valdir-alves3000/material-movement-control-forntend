import { AppButton } from "@components/AppButton/AppButton";
import { useRouter } from "next/router";
import { HomeUserBox, HomeUserContatiner } from "./HomeUser.styled";

const HomeUser = () => {
  const router = useRouter();
  return (
    <HomeUserContatiner>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/forklift.png" alt="" />
      <HomeUserBox>
        <AppButton
          disabled={false}
          loading={false}
          text="Armazenamento"
          onClick={() => {
            router.push("/products/store_product");
          }}
        />
        <AppButton
          disabled={false}
          loading={false}
          text="Abastecimento"
          onClick={() => {
            router.push("/products/market_supply");
          }}
        />
        <AppButton
          disabled={false}
          loading={false}
          text="Consultar produto"
          onClick={() => {
            router.push("/products/consult_product");
          }}
        />
        <AppButton
          disabled={false}
          loading={false}
          text="Atualizar posição"
          onClick={() => {
            router.push("/products/update_position");
          }}
        />
      </HomeUserBox>
    </HomeUserContatiner>
  );
};

export { HomeUser };
