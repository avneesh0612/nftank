import axios from "axios";

import { API_URL as apiUrl } from "../constants/constants";

const uploadToIpfs = async (base64: string) => {
  const hash = await axios
    .post(`${apiUrl}/ipfs/upload`, {
      image: base64,
    })
    .then((response) => {
      return response.data.hash;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return hash;
};

export default uploadToIpfs;
