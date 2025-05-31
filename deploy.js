const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CertVault = await ethers.getContractFactory("CertVault");
  const contract = await CertVault.deploy();

  await contract.waitForDeployment(); // ethers v6 syntax
  console.log("Contract deployed to:", contract.target); // Address here
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
