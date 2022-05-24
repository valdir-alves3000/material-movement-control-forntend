import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { HomeAdmin } from "./HomeAdmin/HomeAdmin";
import { HomeUser } from "./HomeUser/HomeUser";

const Home = () => {
  const adminActive = Cookies.get("adminActive");
  const token = Cookies.get("token");

  if (!token) {
    return <ErrorPage />;
  }

  return <Layout>{adminActive ? <HomeAdmin /> : <HomeUser />}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = ctx.req.cookies;

  return {
    props: {
      token,
    },
  };
};

export { Home };
