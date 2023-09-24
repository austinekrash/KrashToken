// Import hardhat
const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  //contract
  const krashAddress = "0x771a01D1a3022F8F3A63AFd2a6Ae1164433243CD";
  const Krash = await hre.ethers.getContractFactory("Krash");
  const krash = await Krash.attach(krashAddress);


  const ownerAddress = "0xb2C2beE0921Ae506Fe5ABe4d4772eE98A9BaA596";

  try {

    const amountToMint = "100000000000000000000";
    await krash.mint(ownerAddress, amountToMint);

    console.log(`Minted ${amountToMint} tokens to ${ownerAddress}`);
  } catch (error) {
    console.error("Error minting tokens:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
