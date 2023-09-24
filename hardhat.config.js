require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Ww96xC7YSKxVIT0CjUH9yGvahKVKsghI',
      accounts: [process.env['PRIVATE_KEY']]
    }
  }
};
