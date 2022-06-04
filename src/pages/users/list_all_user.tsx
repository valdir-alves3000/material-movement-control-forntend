import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import { ListAllUser } from "@components/Users/ListAllUser/ListAllUser";
import { IUserResponse } from "data/types/IApp";
import { GetServerSideProps } from "next";
import { getUsers } from "services/Users";

const list_all_user = ({ users }: IUserResponse) => {
  if (users.length === 0) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      <ListAllUser users={users} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token as string;
  let users = [];

  try {
    users = await getUsers(token);
  } catch (error) {}

  return {
    props: {
      users,
    },
  };
};

export default list_all_user;
