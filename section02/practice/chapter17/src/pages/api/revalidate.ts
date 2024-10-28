import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/"); //다시 생성할 경로 넣으면 됨
    return res.json({ revalidate: true });
  } catch (err) {
    // console.error(err);
    res.status(500).send("Revalidation Failed");
  }
}
