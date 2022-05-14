import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

const upload = async (req: Request, res: Response) => {
  dotenv.config();

  if (!req.body.image) {
    return res.status(400).json({
      message: "[❌] Image field is required",
    });
  }

  try {
    const data = new FormData();
    data.append("image", req.body.image);

    const response = axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      data
    );

    return res.status(200).json({
      message: "[✅] Image uploaded successfully",
      url: (await response).data.data.url,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "[❌] An error occurred while uploading the image",
    });
  }
};

export default upload;
