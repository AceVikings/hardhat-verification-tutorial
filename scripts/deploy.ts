import { ethers, run } from "hardhat";

async function main() {
  const StorageFactory = await ethers.getContractFactory("Storage");
  const Storage = await StorageFactory.deploy(5);
  console.log(`Storage deployed at ${Storage.address}`);

  await Storage.deployTransaction.wait(5);
  await run("verify:verify", {
    address: Storage.address,
    constructorArguments: [5],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
