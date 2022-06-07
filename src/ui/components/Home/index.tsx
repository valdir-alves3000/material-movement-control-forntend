import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import { AppContext } from "contexts/AppContext";
import { IHome } from "data/types/IApp";
import { useContext } from "react";
import { HomeAdmin } from "./HomeAdmin/HomeAdmin";
import { HomeUser } from "./HomeUser/HomeUser";

const Home = ({ token }: IHome) => {
  const { adminActive } = useContext(AppContext);

  if (!token) {
    return <ErrorPage />;
  }

  return <Layout>{adminActive ? <HomeAdmin /> : <HomeUser />}</Layout>;
};

export { Home };
