require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note place arrow hidden arena onion general'; 
let testAccounts = [
"0xcdd0c45b0aca8093eed0c577ac218316516694edd958659ce81192f6bc14397c",
"0xfe8c8f92143ed1ff2c4c7daf1abfbfb5710a35e0b408964cb17d5edc349d6e9b",
"0x01e47d40e81c18fc6f545732f056ffeb83073550846565ac5beed1fc9a6a3ebe",
"0x151cd4b596287188e93f96a31a090bed582044bcd20e17a2a637c7ec79a2269c",
"0xd7688ff005710fa95935c27fa0181f0b54a9aaf03ab70773e7106c1bb47bd387",
"0xdb3c527e8c4b42d111143a2e3e2c0a23701f64e11551b3a3bd5527bc7d2edb69",
"0xbda7e29c18d4707ef1b8bc8d0c22d4bfb08d394fc7bb1d122b91efdb92ad776b",
"0xb195f4987cbc95ceef4c0c61722dd7e64ba83dfefc44d4acb5f7420b8ea37035",
"0x5ffbdd0e2c3f10d6f22d9bea4a9777dbbd4bfe02fe18421b88c1188c414cf520",
"0x6470ab3a56dfbd28f3f8fd6b3d6172d5e71b81883ffca7c054a00e47621f629b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

