/* eslint-disable import/no-anonymous-default-export */

import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, password } = req.body;
  if (req.method === "POST") {
    const user = await prisma.users.findMany({
      where: {
        name,
      },
    });

    if (user.length === 0) {
      return res.json({ message: "User/Password incorrect!" });
    }

    const passwordMatch = await compare(password, user[0].password);

    if (!passwordMatch) {
      return res.json({ message: "User/Password incorrect!" });
    }

    const token = sign(
      {
        name: user[0].name,
      },
      process.env.NEXT_PUBLIC_HASH as string,
      {
        subject: user[0].id,
        expiresIn: "1d",
      }
    );

    return res.json({ token, admin: user[0].admin });
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
