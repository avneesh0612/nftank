import imageToBase64 from "image-to-base64";

/**
 * @description Convert an image to base64
 * @param image The image path/URL
 * @returns Returns the base64 of the image
 */

const convertImageToBase64 = (image: string) => {
  const base64 = imageToBase64(image)
    .then((base64) => {
      return base64;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return base64;
};

export default convertImageToBase64;
