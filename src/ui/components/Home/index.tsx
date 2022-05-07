import { HomeAdmin } from "@components/Home/HomeAdmin";
import { Layout } from "@components/Layout";
// import { AppContext } from "contexts/AppContext";
import { HomeUser } from "./HomeUser";

const Home = () => {
  // const { adminActive } = useContext(AppContext);
  const adminActive = true;
  return <Layout>{adminActive ? <HomeAdmin /> : <HomeUser />}</Layout>;
};

export { Home };
