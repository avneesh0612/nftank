import axios from "axios";
import chalk from "chalk";
import ora from "ora";

import convertImageToBase64 from "../utils/convertImageToBase64";
import uploadToIpfs from "../utils/uploadToIpfs";

import { networksShortHandNaming } from "../data/options";

import { API_URL as apiUrl } from "../constants/constants";

/**
 * @description Mint a NFT at a given address on a given network
 * @param address The address where the NFT should be minted
 * @param network The network on which the NFT should be minted
 * @param image [Optional] The image of the NFT
 * @param title [Optional] The title of the NFT
 * @param description [Optional] The description of the NFT
 */

const mintErc721Nft = async (
  address: string,
  network: string,
  image: string,
  title: string,
  description: string
) => {
  if (image !== null && typeof image === "string") {
    const ipfsSpinner = ora(`[🚀] Uploading the image to IPFS`).start();

    const imageBase64 = await convertImageToBase64(image);
    await uploadToIpfs(imageBase64).then(async (cid) => {
      image = `ipfs://${cid}`;
      ipfsSpinner.succeed(`[🚀] Uploaded the image to IPFS`);
    });
  }

  const spinner = ora(`[✨] Minting a ERC721 NFT on ${network}...`).start();

  await axios
    .post(`${apiUrl}/erc721/mint`, {
      address: address,
      network: networksShortHandNaming.get(network),
      image: image,
      name: title,
      description: description,
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(chalk.green(`\n[✅] NFT minted successfully.`));
        console.log(
          chalk.green(`\n[👀] Check it out at ${res.data.openseaLink}`)
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

export default mintErc721Nft;
