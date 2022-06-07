import { ErrorPage } from "@components/ErrorPage/ErrorPage";
import { Layout } from "@components/Layout";
import { ListAllUser } from "@components/Users/ListAllUser/ListAllUser";
import { prisma } from "@lib/prisma";
import { IUserResponse } from "data/types/IApp";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.users.findMany();

  const data = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      admin: user.admin,
      created_at: user.created_at.toISOString(),
      updated_at: user.updated_at.toISOString(),
    };
  });

  return {
    props: {
      users: data,
    },
  };
};

export default list_all_user;
