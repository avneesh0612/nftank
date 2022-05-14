import express, { Request, Response } from "express";

import erc721Mint from "./controllers/erc721/mint";
import erc1155Mint from "./controllers/erc1155/mint";
import upload from "./controllers/ipfs/upload";

const router: express.Router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Services online" });
});

router.post("/erc721/mint", erc721Mint);
router.post("/erc1155/mint", erc1155Mint);
router.post("/ipfs/upload", upload);

export default router;
