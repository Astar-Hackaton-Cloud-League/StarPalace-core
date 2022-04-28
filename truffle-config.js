require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const config = {
  privateKeyUser: process.env.PRIVATE_KEY_USER,
};

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(privateKeys, ""),
      network_id: 3, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 400, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,
      networkCheckTimeout: 999999999, // Skip dry run before migrations? (default: false for public nets )
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(privateKeys, ""),
      network_id: 97, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 400, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,
      networkCheckTimeout: 999999999, // Skip dry run before migrations? (default: false for public nets )
    },
    shibuya: {
      provider: () =>
        new HDWalletProvider(
          privateKeys,
          "https://rpc.shibuya.astar.network:8545/"
        ),
      network_id: 81, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 400, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,
      networkCheckTimeout: 999999999, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "",
    bscscan: "",
  },

  mocha: {
    timeout: 100000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
      //  evmVersion: "byzantium"
      // }
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
