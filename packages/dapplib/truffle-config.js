require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good close blue spot shock rare remind concert hunt indoor forget thank'; 
let testAccounts = [
"0x8ee002d4b0de952740ee335510a043fcc484f4cba833e0d3f31139bfc795d555",
"0x1cc690a086b75c26d42a81b083cce20fc099d9003d4752346586f15395146192",
"0xcbd9c0cee92731c5f170166934851a8e350662041df1e50f4fee0a6e3fc38fa5",
"0x4f2c6bdf987b90370f56e15638a2ba9b2a30e1dd0147b0c4b28aec306ef405d8",
"0x1a6743f6d70163484ddccc6f2095fa8c6d4593e503359f2703fcd34d7d4d3595",
"0xc55c2e0bb2de53b58ea9839b690ce544020595cc6c24b5b8a9b21e0dcb49423d",
"0x1909ae49cbee0c6f9f9e40e388ca61d21e08146926befa81c75cb53903acc386",
"0x10e2391b292dba78dc908953ce84945949c1b9fdc98ece627191447211ee0b5d",
"0xac32a3a6e0803d9c82274d37c430eaf286f9f62fc6cceda60b4c1bbb2180d384",
"0x571146be84a8800e70571fa7a47f9b0ca45bac262af986631452e5e659933815"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


