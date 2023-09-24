const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying Token contract with the account:", deployer.address);

    // Deploy Krash contract
    const Krash = await ethers.getContractFactory("Krash");
    const krash = await Krash.deploy();

    console.log("Krash contract address:", krash.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
