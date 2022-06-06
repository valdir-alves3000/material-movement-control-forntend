/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  const user = await prisma.users.findMany({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      admin: true,
      password: false,
    },
  });

  if (user.length === 0) {
    return res.json({ message: "User not found!" });
  }

  return res.json(user);
};
