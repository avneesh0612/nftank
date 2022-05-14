import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./router";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/v1", router);

app.listen(port, () =>
  console.log(
    `[⚡️] Server running on port ${port} in ${
      process.env.PORT ? "production" : "development"
    } mode!`
  )
);
