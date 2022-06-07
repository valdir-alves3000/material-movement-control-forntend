/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  if (req.method === "DELETE") {
    try {
      await prisma.users.delete({
        where: {
          id,
        },
      });
      return res.json({ message: "User successfully deleted" });
    } catch (error) {
      return res.json({ message: "User not found" });
    }
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
