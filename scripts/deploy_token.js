const hre = require("hardhat");

async function deploy() {
  const Lock = await hre.ethers.getContractFactory("DecentralizedDonationDAO");
  const lock = await Lock.deploy();

  console.log("Deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

