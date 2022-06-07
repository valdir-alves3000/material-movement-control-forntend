import { randomUUID } from "crypto";
/* eslint-disable import/no-anonymous-default-export */
import { prisma } from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    material,
    status = "receiver",
    locked = false,
    description,
    expiration_date,
    expiry_date_after_opening,
    quantity,
    storage_location = "receivement",
    created_by_user,
  } = req.body;

  if (req.method === "POST") {
    if (!expiration_date || !expiry_date_after_opening) {
      return res.json({ message: "Expiration date is mandatory" });
    }

    if (!material || !quantity || !description) {
      return res.json({ message: "Product/Quantity/Description incorrect" });
    }

    const product = await prisma.products.create({
      data: {
        id: randomUUID(),
        material,
        description,
        storage_location,
        quantity,
        status,
        locked,
        created_by_user,
        updated_by_user: created_by_user,
        expiration_date: new Date(expiration_date),
        expiry_date_after_opening: Number(expiry_date_after_opening),
      },
    });

    return res.json(product);
  } else {
    return res.json({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};
