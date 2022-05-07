import { Layout } from "@components/Layout";
import { SignIn } from "@components/users/SignIn";
import { SignInProvider } from "contexts/SignInContext";

const login = () => {
  return (
    <Layout>
      <SignInProvider>
        <SignIn />
      </SignInProvider>
    </Layout>
  );
};

export default login;
