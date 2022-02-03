// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import saol5lowercase from './saol5lowercase.json'
type DictionaryResponse = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DictionaryResponse>
) {
    res.status(200).send(saol5lowercase);
}
