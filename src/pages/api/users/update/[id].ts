/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const { name, password, admin } = req.body;
  if (req.method === "PUT") {
    const userAlreadyExists = await prisma.users.findMany({
      where: {
        id,
      },
    });

    if (userAlreadyExists.length === 0) {
      return res.json("User not found!");
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.users.update({
      where: {
        id,
      },
      data: {
        name,
        password: password ? passwordHash : userAlreadyExists[0].password,
        admin: admin || userAlreadyExists[0].admin,
      },
    });

    return res.json(user);
  } else {
    return res.json({ message: "Method invalid" });
  }
};
