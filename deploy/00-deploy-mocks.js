const { Contract } = require("ethers")
const {network} = require("harthat")
const {developmentChains, DECIMALS, INITIAL_ANSWER} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()

    if(chainId == 31337){
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            Contract: "MockV3Aggregator",
            from: developer,
            log: true,
            args:[DECIMALS, INITIAL_ANSWER],
    })
    log("Mocks deployed!")
    log("----------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]