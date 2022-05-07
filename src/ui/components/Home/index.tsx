import { HomeAdmin } from "@components/Home/HomeAdmin";
import { Layout } from "@components/Layout";
import { AppContext } from "contexts/AppContext";
import { useContext } from "react";
import { HomeUser } from "./HomeUser";

const Home = () => {
  const { adminActive } = useContext(AppContext);

  return <Layout>{adminActive ? <HomeAdmin /> : <HomeUser />}</Layout>;
};

export { Home };
