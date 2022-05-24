import { Layout } from "@components/Layout";
import { SignIn } from "@components/Users/SignIn/SignIn";
import { SignInProvider } from "contexts/SignInContext";
import { IAppContext } from "data/types/IApp";
import { GetServerSideProps } from "next";

const login = ({ token, adminActive }: IAppContext) => {
  return (
    <Layout>
      <SignInProvider cookies={{ token, adminActive }}>
        <SignIn />
      </SignInProvider>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.token || "";
  const adminActive = ctx.req.cookies.adminActive || false;

  return {
    props: {
      token,
      adminActive,
    },
  };
};

export default login;
