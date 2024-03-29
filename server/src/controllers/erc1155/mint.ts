import { Request, Response } from "express";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

import { erc1155Contracts } from "../../utils/contracts";
import { supportedNetworks } from "../../utils/networks";
import verifyAddress from "../../utils/verifyAddress";

import {
  contractAddress,
  alchemyApiKeys,
  ethersSupportedNetworkNames,
} from "../../constants/constants";

import type { Erc1155RequestBody } from "../../types/erc1155/index";

export default async function handler(req: Request, res: Response) {
  try {
    const {
      address,
      network,
      image,
      name,
      description,
      amount,
    }: Erc1155RequestBody = req.body;

    if (!address || !network) {
      return res
        .status(400)
        .json({ message: "Address and Network are required fields" });
    }

    if (!supportedNetworks.get(network)) {
      return res
        .status(400)
        .json({ message: "Invalid or unsupported network!" });
    }

    if (!verifyAddress(address)) {
      return res.status(400).json({ message: "Invalid address!" });
    }

    if (typeof amount === "number" && amount > 100000) {
      return res.status(400).json({
        message: "You wanna break our servers huh? The limit is 100000",
      });
    }

    const sdk = new ThirdwebSDK(
      new ethers.Wallet(
        process.env.WALLET_PRIVATE_KEY as string,
        new ethers.providers.AlchemyProvider(
          ethersSupportedNetworkNames.get(network),
          alchemyApiKeys.get(network)
        )
      )
    );

    const edition = sdk.getEdition(erc1155Contracts.get(network)!);

    const metadataWithSupply = {
      metadata: {
        name: name || "NFTank Test NFT",
        description:
          description ||
          "🖼 This NFT is generated by NFTank which helps you get NFTs on testnet quickly for testing purposes.",
        image: image || "https://imgur.com/GurpXb4.png",
      },
      supply: typeof amount !== "number" ? 1 : amount,
    };

    const tx = await edition.mintTo(address, metadataWithSupply);
    const tokenId = tx.id.toString();
    const tokenAddress = contractAddress.get(`${network}-erc1155`);

    return res.json({
      message: "NFT minted successfully",
      tokenAddress,
      tokenId,
      amount: `${typeof amount !== "number" ? 1 : amount}`,
      openseaLink: `https://testnets.opensea.io/assets/${network}/${tokenAddress}/${tokenId}`,
    });
  } catch (err) {
    console.error("[⚠️] Error in ERC721 mint", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
