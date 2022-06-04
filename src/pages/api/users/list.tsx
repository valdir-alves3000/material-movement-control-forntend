/* eslint-disable import/no-anonymous-default-export */

import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const users = await prisma.users.findMany();

    return res.json({ users });
  }
};
