const ethers = require('ethers');

export const WalletGeneration = () => {
  //   const HDWallet = ethers.Wallet.createRandom();
  //   const mnemonic = HDWallet._mnemonic().phrase;
  //   const privatekey = HDWallet.privateKey;
  //   const address = HDWallet.address;
  const mnemonic =
    'arrange crazy inner degree toilet behave humble vote hip diary vessel essence';
  const privatekey =
    '0x38c784626af6bcb712f782193482eafbe8769fd2abc988ab2e1c81f178e8f4e4';
  //   const publickey =
  //     '0x0499eedccfbbbc01602e79a4d6e39a7d6ec5194d6c1f8a22abcfdf57a2236c083afbe77eaecaaeaaaeb2758823ee07377dc930184078db8ed5356ba';
  const address = '0xE6ccbFbe35bDea203F00F91Cb386579E11F73af8';

  const walletCopy = [mnemonic, privatekey, address];
  return walletCopy;
};
