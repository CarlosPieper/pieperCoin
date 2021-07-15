const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('caa8b687f9af72b8081e18ae903c83168262885353a90917a8d7336d7a30809e');
const myWalletAdress = myKey.getPublic('hex');

let pieperCoin = new Blockchain();
const tx1 = new Transaction(myWalletAdress, 'public here', 10);
tx1.signTransaction(myKey);
pieperCoin.addTransaction(tx1)

console.log('starting the miner');
pieperCoin.minePendingTransactions(myWalletAdress);
console.log('your balance is', pieperCoin.getAdressBalance(myWalletAdress));

pieperCoin.chain[1].transactions[0].amount = 1;

console.log('is chain valid?', pieperCoin.isChainValid());