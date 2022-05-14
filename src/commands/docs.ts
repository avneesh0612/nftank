import { Command, Flags } from "@oclif/core";
import chalk from "chalk";

export default class Docs extends Command {
  static description = "✨ Check how to mint a NFT using NFTank";

  static examples = ["$ nftank mint"];

  async run() {
    console.log(`
${chalk.bold.green("How to mint a NFT using NFTank?")}

Minting a NFT at a specific address is so simple that even your grandpa can do it.

- Run the ${chalk.bold.blue(
      "nftank mint:erc721"
    )} command, if you want to mint a ERC721 NFT (or) Run the ${chalk.bold.blue(
      "nftank mint:erc1155"
    )} command, if you want to mint a ERC1155 NFT.
- If you want to use stdin options, then pass in ${chalk.bold.blue(
      `--no-interactive`
    )} flag while running the command.
- The necessary inputs to mint the NFT are:
  - Address where the NFT would be minted
  - Network on which the NFT would be minted
- If you don't pass in the image, NFTank would use the default image (${chalk.bold.cyan(
      `https://i.imgur.com/GurpXb4.png`
    )}).
- The limit of amount of ERC1155 NFTs you can mint is ${chalk.bold("100000")}.
- If you have faced any kind of issue/bug while using NFTank, open an issue at ${chalk.bold.cyan(
      `https://github.com/buidler-hub/nftank/issues`
    )}
    `);
  }
}
