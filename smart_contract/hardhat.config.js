// https://eth-goerli.g.alchemy.com/v2/0m12uVJiFDlsOx8Hn1Z4HukBCQzbZTsE

require('@nomiclabs/hardhat-waffle')


module.exports = {
  solidity: '0.8.0',
  networks: {
    georli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0m12uVJiFDlsOx8Hn1Z4HukBCQzbZTsE',
      accounts: ['eb9b5152c6537aa26eb1d28719794c37fe9c25d83ed3f417328c9f68694e662f']
    }
  }
}