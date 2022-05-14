import axios from "axios";
import chalk from "chalk";
import ora from "ora";

import convertImageToBase64 from "../utils/convertImageToBase64";
import uploadImage from "../utils/uploadImage";

import { networksShortHandNaming } from "../data/options";

import { API_URL as apiUrl } from "../constants/constants";

/**
 * @description Mint a ERC1155 NFT at a given address on a given network
 * @param address The address where the NFT should be minted
 * @param network The network on which the NFT should be minted
 * @param image [Optional] The image of the NFT
 * @param title [Optional] The title of the NFT
 * @param description [Optional] The description of the NFT
 * @param amount [Optional] Amount of ERC1155 NFTs to mint
 */

const mintErc1155Nft = async (
  address: string,
  network: string,
  image: string,
  title: string,
  description: string,
  amount: number
) => {
  if (typeof amount === "number" && amount > 100000) {
    return console.error(
      chalk.red("[❌] The limit is 100000 for ERC1155 NFTs")
    );
  }

  if (image !== "" && typeof image === "string") {
    const ipfsSpinner = ora(`[🚀] Uploading the image...`).start();

    const imageBase64 = await convertImageToBase64(image);
    await uploadImage(imageBase64).then(async (link) => {
      image = link;
      ipfsSpinner.succeed(`[🚀] Uploaded the image`);
    });
  }

  const spinner = ora(`[✨] Minting a ERC1155 NFT on ${network}...`).start();

  await axios
    .post(`${apiUrl}/erc1155/mint`, {
      address: address,
      network: networksShortHandNaming.get(network),
      image: image,
      name: title,
      description: description,
      amount: Number(amount),
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(chalk.green(`\n[✅] NFT minted successfully.`));
        console.log(
          chalk.green(`[👀] Check it out at ${res.data.openseaLink}`)
        );

        spinner.succeed(`[✨] Successfully minted a ERC721 NFT on ${network}`);
      } else {
        console.log(chalk.red(`\n[⚠️] Error: ${res.data}`));

        spinner.fail("[❌] An error occurred while minting the NFT");
      }
    })
    .catch((err) => {
      console.log(chalk.red(`\n[⚠️] Error: ${err}`));

      spinner.fail("[❌] An error occurred while minting the NFT");
    });
};

export default mintErc1155Nft;
