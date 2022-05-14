import { Request, Response } from "express";
import moralis from "moralis/node";

export default async function upload(req: Request, res: Response) {
  const base64 = req.body.image;

  if (!base64) {
    return res.status(400).json({ message: "Image is required" });
  }

  const serverUrl = process.env.MORALIS_SERVER_URL;
  const appId = process.env.MORALIS_APP_ID;
  const masterKey = process.env.MORALIS_MASTER_KEY;

  await moralis.start({
    serverUrl,
    appId,
    masterKey,
  });

  const image = `data:image/png;base64,${base64}`;
  const file = new moralis.File("image.png", { base64: image });
  await file.saveIPFS({
    useMasterKey: true,
  });

  return res.status(200).json({
    // @ts-ignore
    hash: file.hash(),
  });
}
