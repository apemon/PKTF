/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };
const HDWallet = require('truffle-hdwallet-provider');

const mnemonic = require('./mnemonic.secret');
const infuraApi = require('./infura-api.secret');

module.exports = {  
  networks: {  
    development: {
      host: "127.0.0.1",  
      port: 8545,  
      network_id: "*" // Match any network id  
    },
    kovan: {
      provider: () => new HDWallet(mnemonic, `https://kovan.infura.io/v3/${infuraApi}`),
      network_id: 42,
      websockets: true,
      skipDryRun: true,
    }
  }
};
