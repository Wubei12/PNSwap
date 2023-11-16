require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/gad45uPK9BmeqEdhK16lfPUHKgofwTLo",
      accounts: [
        "542e420a01b519be5c2fd1a3279ad4e6fdedf7310f6943aeb273b8e37017d4ee",
      ],
    },
  },
};
