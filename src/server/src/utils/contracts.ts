import dotenv from "dotenv";
dotenv.config();

const erc721Contracts = new Map<string, string>([
  ["mumbai", process.env.THIRDWEB_ERC721_CONTRACT_ADDRESS_MUMBAI as string],
  ["rinkeby", process.env.THIRDWEB_ERC721_CONTRACT_ADDRESS_RINKEBY as string],
]);

const erc1155Contracts = new Map<string, string>([
  ["mumbai", process.env.THIRDWEB_ERC1155_CONTRACT_ADDRESS_MUMBAI as string],
  ["rinkeby", process.env.THIRDWEB_ERC1155_CONTRACT_ADDRESS_RINKEBY as string],
]);

export { erc721Contracts, erc1155Contracts };
