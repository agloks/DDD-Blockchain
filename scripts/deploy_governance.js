const hre = require("hardhat");

async function deploy() {
  const ADDRESS_TOKEN = "0x78e944FbEc04169cBFfbFAc2178b41ac78EaADE1"
  const Lock = await hre.ethers.getContractFactory("DDDGovernance");
  const lock = await Lock.deploy(ADDRESS_TOKEN);

  console.log("Deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

