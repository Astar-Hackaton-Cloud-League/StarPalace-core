require("dotenv").config();
const { expect } = require("chai");
const { web3, provider } = require("../eth/web3.js");
const compiledToken = require("../build/contract/ConditionalTokens.json");
const { it } = require("mocha");

const config = {
  privateKeyUser: process.env.PRIVATE_KEY_USER,
};

describe("Initial Setup", () => {
  it("deploying test token", async () => {
    try {
      accounts = await web3.eth.getAccounts();
      console.log(accounts);
      const TestTokenDeployer = new web3.eth.Contract(compiledToken.abi);
      await TestTokenDeployer.deploy({
        data: compiledToken.bytecode,
        arguments: [],
      })
        .send({
          from: accounts[0],
        })
        .on("receipt", (receipt) => {
          if (!receipt.contractAddress) {
            console.log("Contract Address Not Found!");
            return;
          }
          tokenAddress = receipt.contractAddress;
          console.log("Token Address: ", tokenAddress);
          minter = new web3.eth.Contract(compiledToken.abi, tokenAddress);
          expect(receipt.status).to.equal(true);
        })
        .on("error", (error) => {
          done(error);
        });
    } catch (error) {
      console.log(error);
    }
  });
});
