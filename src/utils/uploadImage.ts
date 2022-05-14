import axios from "axios";

import { API_URL as apiUrl } from "../constants/constants";

const uploadImage = async (base64: string) => {
  const url = await axios
    .post(`${apiUrl}/image/upload`, {
      image: base64,
    })
    .then((response) => {
      return response.data.url;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return url;
};

export default uploadImage;
