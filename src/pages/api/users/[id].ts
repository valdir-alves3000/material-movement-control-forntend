import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.send(req.query.id);
  } else {
    return res.send(req.method);
  }
};
