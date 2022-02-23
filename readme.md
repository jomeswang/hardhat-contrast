## 参考文章
https://nftschool.dev/tutorial/mint-nftstorage-polygon/#minting-your-nft


## 运行环境
node.version > 14.0.0


## 命令

```bash
// 安装依赖
npm i

 // 部署合约
npx hardhat run scripts/deploy-contract.js --network matic

// 生成NFT
node ./scripts/mint-nft.js

// 使用NFT.STORAGE来存储数字资源
node ./scripts/store-asset.mjs
```