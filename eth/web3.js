const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const config = {
  privateKeyUser: process.env.PRIVATE_KEY_USER,
};

const privateKeys = [config.privateKeyUser];

const provider = new HDWalletProvider(
  privateKeys,
  "https://rpc.shibuya.astar.network:8545/"
);

const web3 = new Web3(provider);

module.exports = { web3, provider };
