/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const products = await prisma.products.findMany();

      return res.json(products);
    } catch (error) {
      return res.json({ message: "Product not found" });
    }
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
