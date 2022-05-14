import { Command, Flags } from "@oclif/core";
import isImage from "is-image";
import chalk from "chalk";
import inquirer from "inquirer";

import mintErc721Nft from "../../lib/mintErc721Nft";

import { erc721 as questions } from "../../data/questions";
import { networksFlags } from "../../data/options";

export default class Erc721 extends Command {
  static description = "✨ Mint a ERC721 NFT at a given address";

  static examples = [
    "nftank mint:erc721 --address=0xd24CA0297558f0827e2C467603869D1AC9fF435d --network=mumbai",
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
    interactive: Flags.boolean({
      char: "I",
      allowNo: true,
      required: true,
      default: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Erc721);

    if (!flags.interactive) {
      if (!(flags.address && flags.network)) {
        return console.error(
          chalk.red(
            "[❌] Address and Network are required when not using interactive mode"
          )
        );
      }
      if (!networksFlags.includes(flags.network as string)) {
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
        mintErc721Nft(
          answers.address,
          answers.network,
          answers.image,
          answers.title,
          answers.description
        );
      });
    } else {
      mintErc721Nft(
        flags.address as string,
        flags.network as string,
        flags.image as string,
        flags.title as string,
        flags.description as string
      );
    }
  }
}
