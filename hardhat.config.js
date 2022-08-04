// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-web3");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.3",
      },
      {
        version: "0.5.5",
        settings: {},
      },
    ],
    overrides: {
      "@openzeppelin/upgrades/contracts/upgradeability/ProxyFactory.sol": {
        version: "0.5.5",
        settings: { }
      }
    }
  },
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/lH15QWdolwghZo974dV77i0eJxGuJAe6",
      accounts: ['d1e6fb7562c7c4800c8c1210876ed2b7037584ee53828b846ac3042d9aea9659']
    }
  }
}