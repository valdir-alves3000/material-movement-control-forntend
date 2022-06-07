import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import { AppContext } from "contexts/AppContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { HomeAdmin } from "./HomeAdmin/HomeAdmin";
import { HomeUser } from "./HomeUser/HomeUser";

const Home = (token: string) => {
  const { adminActive } = useContext(AppContext);

  if (!token) {
    return <ErrorPage />;
  }

  return <Layout>{adminActive ? <HomeAdmin /> : <HomeUser />}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  return {
    props: {
      token,
    },
  };
};

export { Home };
