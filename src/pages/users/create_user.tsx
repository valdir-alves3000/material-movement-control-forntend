import { Layout } from "@components/Layout";
import { CreateUser } from "@components/Users/CreateUser/CreateUser";
import { AppProvider } from "contexts/AppContext";
import { CreateUserProvider } from "contexts/CreateUserContext";

const create_user = () => {
  return (
    <Layout>
      <AppProvider>
        <CreateUserProvider>
          <CreateUser />
        </CreateUserProvider>
      </AppProvider>
    </Layout>
  );
};

export default create_user;
