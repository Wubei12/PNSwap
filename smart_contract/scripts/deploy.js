const hre = require("hardhat");

// const main = async () => {
//   const transactionFactory = await hre.ethers.getContractFactory(
//     "Transactions"
//   );
//   const transactionContract = await transactionFactory.deploy();

//   await transactionContract.waitForDeployment();
//   console.log("Transactions deployed to:", transactionContract.address);
// };

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.parseEther("0.001");

  const transactions = await hre.ethers.deployContract("Transactions");

  await transactions.waitForDeployment();

  console.log(
    `Transactions.sol contract with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${transactions.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
