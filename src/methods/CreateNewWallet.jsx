const ethers = require('ethers');

export const CreateNewWallet = (mnemonic, index) => {
  const node = ethers.utils.HDNode.fromMnemonic(mnemonic);
  const path = "m/44'/60'/0'/0/" + index;
  const wallet = node.derivePath(path);
  console.log('address', wallet.mnemonic.phrase);
  console.log('address', wallet.address);
  console.log('privatekey', wallet.privateKey);

  return wallet;
};
