const { upgrades } = require("hardhat")
// scripts/deploy.js
async function main() {
    const Box = await ethers.getContractFactory("Box")
    const box = await Box.deploy()
    console.log("Box deployed to address %s",box.address)

    const StoreFactory = await ethers.getContractFactory("StoreFactory");
    const sf = await StoreFactory.deploy(box.address)
    await sf.deployed()
    console.log("StoreFactory deployed to %s", sf.address)

    await sf.cloneStore()
    const clone = await sf.getAddress(0)
    console.log("Clone deployed to %s", clone)
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });