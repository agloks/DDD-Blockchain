const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '.env')
})

require("@nomicfoundation/hardhat-toolbox");
require('./tasks/deploy')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  networks: {
    local: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      loggingEnabled: true,
      chainId: 31337.,
      url: 'http://127.0.0.1:8545'
    },
    mainnet: {
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC
      },
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      network_id: 1
    },
    kovan: {
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC
      },
      url: 'https://kovan.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
      network_id: 42
    },
    goerli: {
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC
      },
      url: 'https://goerli.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
    },
    polygon: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMYI_ID,
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC
      },
      chainId: 137,
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/' + process.env.ALCHEMYI_ID,
      accounts: {
        mnemonic: process.env.DEV_MNEMONIC
      },
      chainId: 80001,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_APIKEY,
      kovan: process.env.ETHERSCAN_APIKEY,
      polygonMumbai: process.env.POLYGON_APIKEY
    }
  }
};
