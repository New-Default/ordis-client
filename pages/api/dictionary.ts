// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import saol5lowercase from './logic/saol5lowercase.json'
type DictionaryResponse = string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DictionaryResponse>
) {
    res.status(200).send(saol5lowercase);
}

// 75%
// jobba en dag varannan vecka - nd
// backlogg av björn-grejor

