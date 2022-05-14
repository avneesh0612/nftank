import { Command, Flags } from "@oclif/core";
import isImage from "is-image";
import chalk from "chalk";
import inquirer from "inquirer";

import mintErc1155Nft from "../../lib/mintErc1155Nft";

import { erc1155 as questions } from "../../data/questions";
import { networks } from "../../data/options";

export default class Erc1155 extends Command {
  static description = "✨ Mint a ERC1155 NFT at a given address";

  static examples = [
    "nftank mint:erc1155 --address=0xd24CA0297558f0827e2C467603869D1AC9fF435d --network=mumbai",
  ];

  static flags = {
    address: Flags.string({
      char: "a",
    }),
    network: Flags.string({
      char: "n",
    }),
    image: Flags.string({
      char: "i",
    }),
    title: Flags.string({
      char: "t",
    }),
    description: Flags.string({
      char: "d",
    }),
    amount: Flags.integer({
      char: "q",
    }),
    interactive: Flags.boolean({
      char: "I",
      allowNo: true,
      required: true,
      default: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Erc1155);

    if (!flags.interactive) {
      if (!(flags.address && flags.network)) {
        return console.error(
          chalk.red(
            "[❌] Address and Network are required when not using interactive mode"
          )
        );
      }
      if (!networks.includes(flags.network as string)) {
        return console.error(
          chalk.red(`[❌] Network ${flags.network} is not supported.`)
        );
      }
    }

    if (flags.image && !isImage(flags.image)) {
      return console.error(chalk.red("[⚠️] The given image path is invalid"));
    }

    if (flags.interactive) {
      inquirer.registerPrompt("search-list", require("inquirer-search-list"));

      inquirer.prompt(questions).then(async answers => {
        mintErc1155Nft(
          answers.address,
          answers.network,
          answers.image,
          answers.title,
          answers.description,
          answers.amount
        );
      });
    } else {
      mintErc1155Nft(
        flags.address as string,
        flags.network as string,
        flags.image as string,
        flags.title as string,
        flags.description as string,
        flags.amount as number
      );
    }
  }
}
