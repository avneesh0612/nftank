import dotenv from "dotenv";

dotenv.config();

const contractAddress = new Map<string, string | undefined>([
  ["mumbai-erc1155", process.env.THIRDWEB_ERC1155_CONTRACT_ADDRESS_MUMBAI],
  ["rinkeby-erc1155", process.env.THIRDWEB_ERC1155_CONTRACT_ADDRESS_RINKEBY],
  ["mumbai-erc721", process.env.THIRDWEB_ERC721_CONTRACT_ADDRESS_MUMBAI],
  ["rinkeby-erc721", process.env.THIRDWEB_ERC721_CONTRACT_ADDRESS_RINKEBY],
]);

const alchemyApiKeys = new Map<string, string | undefined>([
  ["mumbai", process.env.ALCHEMY_MUMBAI],
  ["rinkeby", process.env.ALCHEMY_RINKEBY],
]);

const ethersSupportedNetworkNames = new Map<string, string>([
  ["mumbai", "maticmum"],
  ["rinkeby", "rinkeby"],
]);

export { contractAddress, alchemyApiKeys, ethersSupportedNetworkNames };
