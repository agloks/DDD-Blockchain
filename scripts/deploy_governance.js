const hre = require("hardhat");

async function deploy() {
  const ADDRESS_TOKEN = "0xC29f81CA53171D259EE29FF14b8aFB2D73486AA7"
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

