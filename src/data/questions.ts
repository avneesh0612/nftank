import isImage from "is-image";
import { networks } from "./options";

const erc721 = [
  {
    type: "input",
    name: "address",
    message: "Enter the address where the NFT would be minted:",
    validate: (value: string) => {
      if (value.length <= 0) {
        return "Please enter a valid address";
      } else {
        return true;
      }
    },
  },
  {
    type: "search-list",
    name: "network",
    message: "Select the testnet on which you want to mint the NFT:",
    choices: networks,
    default: "mumbai",
  },
  {
    type: "input",
    name: "image",
    message: "Enter the image path/link of the NFT:",
    default: null,
    validate: (value: string) => {
      if (value === null) {
        return true;
      } else {
        if (isImage(value)) {
          return true;
        }
        return "Please enter a valid image path/link";
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of the NFT:",
    default: null,
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of the NFT:",
    default: null,
  },
];

const erc1155 = [
  {
    type: "input",
    name: "address",
    message: "Enter the address where the NFT would be minted:",
    validate: (value: string) => {
      if (value.length <= 0) {
        return "Please enter a valid address";
      } else {
        return true;
      }
    },
  },
  {
    type: "search-list",
    name: "network",
    message: "Select the testnet on which you want to mint the NFT:",
    choices: networks,
    default: "mumbai",
  },
  {
    type: "input",
    name: "image",
    message: "Enter the image path/link of the NFT:",
    default: null,
    validate: (value: string) => {
      if (value === null) {
        return true;
      } else {
        if (isImage(value)) {
          return true;
        }
        return "Please enter a valid image path/link";
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of the NFT:",
    default: null,
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of the NFT:",
    default: null,
  },
  {
    type: "input",
    name: "amount",
    message: "Enter the amount of NFT to mint:",
    default: 1,
    validate: (value: number) => {
      if (typeof value === "number" && value <= 0) {
        return "Please enter a valid amount";
      } else {
        return true;
      }
    },
  },
];

export { erc721, erc1155 };
