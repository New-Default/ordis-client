// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const remoteServer = "http://localhost:8080";

enum LetterResult {
  Incorrect,
  DifferentPosition,
  Correct,
}

type WordResponse = {
  guessWord: string;
  exists: boolean;
  valid: boolean;
  score: LetterResult[] | null;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WordResponse>
) {
  console.log(req.url);
  const paths = req.url?.split("?");
  const guessWord = paths?.[paths?.length - 1] ?? '';
  try {
    const response = await fetch(`${remoteServer}/${guessWord}`).then((resp) =>
      resp.json()
    );
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({
      guessWord,
      exists: false,
      valid: false,
      score: null,
      error: "something wrong with the system",
    });
  }
}
