/* eslint-disable import/no-anonymous-default-export */

import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const users = await prisma.users.findMany({
        select: {
          id: true,
          name: true,
          admin: true,
          created_at: true,
          password: false,
        },
      });

      return res.json(users);
    } catch (error) {
      return res.json({ message: "Request failed" });
    }
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
