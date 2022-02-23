const {ethers} = require('hardhat');

const CONTRACT_ADDRESS = "0xE175C3a7d7Cfc93d7a242917D22f2F8B6e120951"
const META_DATA_URL = "ipfs://bafyreiauiz7hdftb5jaltbwdt74ip2tkdh5m2th7wlx6szqtt5mxn33dye/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("QNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });