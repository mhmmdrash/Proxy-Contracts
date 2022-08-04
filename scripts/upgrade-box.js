const { upgrades } = require("hardhat")

async function main() {
    const proxyAddress = '0xEc538214e17714fdb6BEB08a7807f309d2459722';
    const BoxV2 = ethers.getContractFactory("BoxV2")
    console.log("Preparing to upgrade")
    const box = await upgrades.upgradeProxy(proxyAddress, BoxV2)
    console.log("Upgrade successfull")
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});