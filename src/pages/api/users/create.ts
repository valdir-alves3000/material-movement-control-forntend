import { randomUUID } from "crypto";
/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, password, admin } = req.body;
  if (req.method === "POST") {
    const userAlreadyExists = await prisma.users.findMany({
      where: {
        name,
      },
    });

    if (userAlreadyExists.length > 0) {
      return res.json("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.users.create({
      data: {
        id: randomUUID(),
        name,
        password: passwordHash,
        admin,
      },
    });

    return res.json(user);
  } else {
    return res.json({ message: "Method invalid" });
  }
};
