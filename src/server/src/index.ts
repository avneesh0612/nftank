import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./router";

dotenv.config();

if (
  !(
    process.env.THIRDWEB_ERC721_CONTRACT_ADDRESS_MUMBAI ||
    process.env.THIRDWEB_ERC1155_CONTRACT_ADDRESS_MUMBAI ||
    process.env.THIRDWEB_ERC721_CONTRACT_ADDRESS_RINKEBY ||
    process.env.THIRDWEB_ERC1155_CONTRACT_ADDRESS_RINKEBY ||
    process.env.ALCHEMY_MUMBAI ||
    process.env.ALCHEMY_RINKEBY ||
    process.env.WALLET_PRIVATE_KEY
  )
) {
  console.error("[⚠️] Environment variables not defined!");
  throw new Error("[⚠️] Environment variables not defined!");
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

app.listen(port, () =>
  console.log(
    `[⚡️] Server running on port ${port} in ${
      process.env.PORT ? "production" : "development"
    } mode!`
  )
);
