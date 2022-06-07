import { Home } from "@components/Home";
import { IHome } from "data/types/IApp";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const HomePage = ({ token }: IHome) => {
  return <Home token={token} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  return {
    props: {
      token,
    },
  };
};

export default HomePage;
