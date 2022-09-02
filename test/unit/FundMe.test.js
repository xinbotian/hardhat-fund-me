const { deployments, ethers, getNamedAccounts } = require("hardhat")
const {assert, expect} = require("chai")
const { experimentalAddHardhatNetworkMessageTraceHook } = require("hardhat/config")
describe("FundMe", async function(){
    let fundMe
    beforeEach(async function(){
        // const accounts = await ethers.getSigners()
        // const accountZero = accountts[0]
        const { deployer } = await getNamedAccounts()
        await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe", deployer)
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator")
    })
    describe("constructor", async function(){
        it("sets the aggregator address correctly", async function (){
            const response = await fundMe.priceFeed()
            assert.equal(response, mockV3Aggregator.address)
        })
    })
    describe("fund", async function(){
        it("Fails if you don't send enough ETH", async function(){
            await expect(fundMe.fund()).to.be.revertedwith("you need to spend more ETH")
        })
    })
})