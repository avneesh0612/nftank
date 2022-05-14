import { utils } from "ethers";

const verifyAddress = (address: string) => {
  try {
    utils.getAddress(address);
  } catch {
    return false;
  }
  return true;
};

export default verifyAddress;
