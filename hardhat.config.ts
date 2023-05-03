import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: "https://rpc.ankr.com/eth_goerli",
    },
  },
  etherscan: {
    apiKey: {
      goerli: `${process.env.API_KEY}`,
    },
  },
};

export default config;
