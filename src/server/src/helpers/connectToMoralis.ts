import moralis from "moralis/node";
import dotenv from "dotenv";

dotenv.config();

/**
 * @description Connects to the moralis instance
 */

const connectToMoralis = async () => {
  const serverUrl = process.env.MORALIS_SERVER_URL;
  const appId = process.env.MORALIS_APP_ID;
  const masterKey = process.env.MORALIS_MASTER_KEY;

  await moralis.start({
    serverUrl,
    appId,
    masterKey,
  });
};

export default connectToMoralis;
